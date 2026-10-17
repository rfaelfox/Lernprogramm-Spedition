import * as store from '../store.js';
import * as C from '../content.js';
import * as L from '../learning.js';
import { esc, fmtDate, todayISO, daysBetween, addDays } from '../util.js';
import { icon, toast, dialog, confirmDanger, safe } from '../ui.js';
import { buildPlan } from '../planner.js';

const DEFAULT_CHECK = [
  'Prüfungstermin und Anmeldung bei der IHK Saarland geprüft',
  'Zugelassene Hilfsmittel geklärt (z. B. Taschenrechner, Formelsammlung)',
  'Alle Lernfelder des Prüfungsbereichs mindestens einmal im Testmodus geübt',
  'Fehlerheft durchgearbeitet',
  'Eine alte Prüfung unter Zeitdruck bearbeitet (Material aus Schule/Betrieb)',
  'Wahl-Verkehrsträger für den Prüfungsbereich festgelegt',
  'Ausbildungsnachweis (Berichtsheft) vollständig',
  'Anfahrt und Uhrzeit am Prüfungstag geplant'
];

export async function render(el, { app }) {
  app.title('Termine & Lernplan');
  const s = store.settings();
  const exams = store.all('exams').sort((a, b) => a.date.localeCompare(b.date));
  const today = todayISO();
  const { plan, warnings } = buildPlan({ horizon: 13 });
  const check = store.all('checklist');
  const items = check.length ? check.sort((a, b) => (a.order || 0) - (b.order || 0)) : DEFAULT_CHECK.map((t, i) => ({ id: 'default-' + i, text: t, done: false, order: i, unsaved: true }));
  el.innerHTML = `<div class="row between"><h1>Termine & Lernplan</h1><button class="btn primary" id="add">${icon('plus')} Klassenarbeit / Prüfung eintragen</button></div>
    <div class="grid two">
      <section class="card"><h2>Termine</h2>
        ${exams.filter((e) => e.date >= today).map((e) => examRow(e, today)).join('') || '<p class="muted">Keine kommenden Termine.</p>'}
        ${exams.some((e) => e.date < today) ? `<details style="margin-top:10px"><summary class="small">Vergangene Termine (${exams.filter((e) => e.date < today).length})</summary>${exams.filter((e) => e.date < today).reverse().map((e) => examRow(e, today)).join('')}</details>` : ''}
        <p class="small muted" style="margin-top:10px">Die Zwischenprüfung findet laut Ausbildungsordnung in der Mitte des 2. Ausbildungsjahres statt. Den genauen Termin nennt die IHK Saarland.</p>
      </section>
      <section class="card"><h2>Meine Lernzeit</h2>
        <div class="field"><label for="dm">Lernzeit pro Lerntag</label><select id="dm">${[5, 10, 15, 20, 30, 45, 60, 90].map((m) => `<option value="${m}" ${m === Number(s.dailyMinutes) ? 'selected' : ''}>${m} Minuten</option>`).join('')}</select></div>
        <label>Lerntage</label><div class="chips" id="days">${['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d, i) => `<button type="button" class="chip" data-day="${i + 1}" aria-pressed="${(s.studyDays || [1, 2, 3, 4, 5, 6, 7]).includes(i + 1)}">${d}</button>`).join('')}</div>
        <div class="field" style="margin-top:12px"><label for="wg">Wochenziel</label><select id="wg">${[30, 60, 90, 105, 120, 180, 240, 300].map((m) => `<option value="${m}" ${m === Number(s.weeklyGoalMinutes) ? 'selected' : ''}>${m} Minuten</option>`).join('')}</select></div>
        <div class="row"><button class="btn small" id="notif">${s.notifications ? 'Erinnerungen ausschalten' : 'Erinnerungen einschalten'}</button></div>
        <p class="small muted" id="notifInfo">${notifInfo(s)}</p>
      </section>
    </div>
    <h2 style="margin-top:20px">Lernplan für die nächsten 14 Tage</h2>
    ${warnings.map((w) => `<div class="note warn">${esc(w)}</div>`).join('')}
    <p class="small muted">Der Plan wird bei jedem Öffnen aus deinem aktuellen Stand neu berechnet: Verpasste Einheiten rutschen automatisch nach vorne, beherrschte Themen fallen weg. Der Tag vor einem Termin ist als Puffer für eine Generalprobe reserviert.</p>
    <div>${plan.map((p) => `<div class="plan-day ${p.day === today ? 'today' : ''}"><div class="row between"><b>${p.day === today ? 'Heute' : p.day === addDays(today, 1) ? 'Morgen' : new Date(p.day + 'T12:00').toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: '2-digit' })}</b><span class="small muted">${p.capacity ? `${Math.round(p.items.reduce((s2, i) => s2 + (i.minutes || 0), 0))} / ${p.capacity} Min.` : 'kein Lerntag'}</span></div>
      ${p.items.map((i) => `<a class="plan-item" href="${i.href || '#/'}" style="text-decoration:none;color:inherit">${icon(i.kind === 'learn' ? 'learn' : i.kind === 'cards' ? 'cards' : i.kind === 'buffer' ? 'flag' : 'practice')}<span style="flex:1">${esc(i.label)}${i.exam ? `<br><span class="small muted">für ${esc(i.exam.title)}</span>` : ''}</span><span class="small muted">${Math.round(i.minutes || 0)} Min.</span></a>`).join('') || (p.capacity ? '<p class="small muted" style="margin:4px 0">Frei. Fällige Karteikarten wiederholen genügt.</p>' : '')}</div>`).join('')}</div>
    <h2 style="margin-top:20px">Checkliste Prüfungsvorbereitung</h2>
    <div class="card" id="check">${items.map((c) => `<div class="row nowrap"><label class="check" style="flex:1"><input type="checkbox" data-c="${c.id}" ${c.done ? 'checked' : ''}> ${esc(c.text)}</label><button class="btn icon ghost" data-cdel="${c.id}" aria-label="Punkt entfernen">${icon('x')}</button></div>`).join('')}
      <div class="row" style="margin-top:8px"><input type="text" id="newc" placeholder="Eigener Punkt …" style="flex:1"><button class="btn" id="addc">${icon('plus')}</button></div></div>`;

  const rerender = () => render(el, { app });
  el.querySelector('#add').onclick = () => editExam(null, rerender);
  el.querySelectorAll('[data-exam]').forEach((b) => b.onclick = () => editExam(store.get('exams', b.dataset.exam), rerender));
  el.querySelector('#dm').onchange = (e) => safe(async () => { await store.saveSettings({ dailyMinutes: Number(e.target.value) }); rerender(); }, 'Lernzeit gespeichert');
  el.querySelector('#wg').onchange = (e) => safe(() => store.saveSettings({ weeklyGoalMinutes: Number(e.target.value) }), 'Wochenziel gespeichert');
  el.querySelectorAll('[data-day]').forEach((b) => b.onclick = () => safe(async () => {
    const cur = new Set(store.settings().studyDays || [1, 2, 3, 4, 5, 6, 7]); const d = Number(b.dataset.day);
    cur.has(d) ? cur.delete(d) : cur.add(d); if (!cur.size) cur.add(d);
    await store.saveSettings({ studyDays: [...cur].sort() }); rerender();
  }));
  el.querySelector('#notif').onclick = async () => {
    if (store.settings().notifications) { await store.saveSettings({ notifications: false }); return rerender(); }
    if (!('Notification' in window)) { toast('Dieser Browser unterstützt keine Benachrichtigungen. Am iPhone funktioniert es nur, wenn die App über „Zum Home-Bildschirm“ installiert ist (ab iOS 16.4).', 'bad'); return; }
    const p = await Notification.requestPermission();
    if (p !== 'granted') { toast('Benachrichtigungen wurden nicht erlaubt.', 'bad'); return; }
    await store.saveSettings({ notifications: true }); toast('Erinnerungen eingeschaltet', 'ok'); rerender();
  };
  const saveDefaults = async () => { if (!check.length) for (const c of items) await store.put('checklist', { id: c.id, text: c.text, done: false, order: c.order }); };
  el.querySelectorAll('[data-c]').forEach((c) => c.onchange = () => safe(async () => { await saveDefaults(); const it = store.get('checklist', c.dataset.c); await store.put('checklist', { ...it, done: c.checked }); }));
  el.querySelectorAll('[data-cdel]').forEach((b) => b.onclick = () => safe(async () => { await saveDefaults(); await store.remove('checklist', b.dataset.cdel); rerender(); }));
  el.querySelector('#addc').onclick = () => safe(async () => { const t = el.querySelector('#newc').value.trim(); if (!t) return; await saveDefaults(); await store.put('checklist', { text: t, done: false, order: Date.now() }); rerender(); });
}

function notifInfo(s) {
  if (!s.notifications) return 'Erinnerungen sind aus. Sie werden nur nach deiner Aktivierung genutzt.';
  return 'Erinnerungen sind an. Hinweis: Ohne eigenen Push-Server kann die App nur erinnern, während sie geöffnet ist oder gerade gestartet wird (z. B. an fällige Karten und nahe Termine).';
}

function examRow(e, today) {
  const d = daysBetween(today, e.date);
  const ids = L.examUnitIds(e);
  const ms = ids.map((id) => C.unitById.get(id)).filter(Boolean).map(L.unitMastery);
  const ready = ms.length ? ms.reduce((s, m) => s + m.value, 0) / ms.length : 0;
  return `<div class="row between" style="padding:8px 0;border-bottom:1px solid var(--line)"><span><b>${esc(e.title)}</b> ${e.demo ? '<span class="badge demo">Beispiel</span>' : ''}<br><span class="small muted">${fmtDate(e.date)} · ${esc(e.kind)} · ${esc((e.areas || []).map((a) => C.areaLabel(C.areaById.get(a))).join(', '))}${ms.length ? ` · vorbereitet ${Math.round(ready * 100)} %` : ''}</span></span><span class="row">${d >= 0 ? `<span class="badge ${d <= 7 ? 'warn' : ''}">${d === 0 ? 'heute' : 'in ' + d + ' T.'}</span>` : ''}<button class="btn small ghost" data-exam="${e.id}">${icon('edit')}</button></span></div>`;
}

async function editExam(e, done) {
  const v = e || { kind: 'Klassenarbeit', date: addDays(todayISO(), 14), areas: [], topics: [] };
  const r = await dialog({
    title: e ? 'Termin bearbeiten' : 'Termin eintragen',
    body: `<div class="form-grid"><div class="field"><label for="et">Bezeichnung</label><input id="et" name="title" required value="${esc(v.title || '')}" placeholder="z. B. Klassenarbeit LF 6"></div>
      <div class="field"><label for="ek">Art</label><select id="ek" name="kind">${['Klassenarbeit', 'Test', 'Zwischenprüfung', 'Abschlussprüfung', 'Referat', 'Sonstiges'].map((k) => `<option ${v.kind === k ? 'selected' : ''}>${k}</option>`).join('')}</select></div>
      <div class="field"><label for="ed">Datum</label><input id="ed" type="date" name="date" required value="${esc(v.date)}"></div></div>
      <label>Lernfelder / Fächer</label><div class="chips" id="ea">${C.areas.map((a) => `<label class="chip"><input type="checkbox" name="area" value="${a.id}" ${(v.areas || []).includes(a.id) ? 'checked' : ''} style="width:18px;height:18px"> ${esc(C.areaLabel(a))}</label>`).join('')}</div>
      <p class="small muted" style="margin-top:6px">Optional: Themen genauer eingrenzen (sonst zählen alle Themen der gewählten Bereiche).</p>
      <div id="etp" class="stack"></div>
      <div class="field" style="margin-top:10px"><label for="en">Notiz (z. B. Seiten, Hilfsmittel)</label><textarea id="en" name="note" style="min-height:70px">${esc(v.note || '')}</textarea></div>
      ${e ? '<label class="check"><input type="checkbox" name="done" ' + (v.done ? 'checked' : '') + '> erledigt</label>' : ''}`,
    actions: [...(e ? [{ label: 'Löschen', value: 'del', danger: true }] : []), { label: 'Abbrechen', value: 'cancel' }, { label: 'Speichern', value: 'ok', primary: true }],
    onOpen: (d) => {
      const draw = () => {
        const sel = Array.from(d.querySelectorAll('[name=area]:checked')).map((x) => x.value);
        d.querySelector('#etp').innerHTML = sel.map((aid) => { const a = C.areaById.get(aid); return `<div><b class="small">${esc(C.areaLabel(a))}</b><div class="chips">${a.topics.map((t) => `<label class="chip"><input type="checkbox" name="topic" value="${t.id}" ${(v.topics || []).includes(t.id) ? 'checked' : ''} style="width:18px;height:18px"> ${esc(t.title)}</label>`).join('')}</div></div>`; }).join('');
      };
      d.querySelectorAll('[name=area]').forEach((x) => x.onchange = draw); draw();
    }
  });
  if (r.value === 'del') { if (await confirmDanger('Termin löschen?', `„${e.title}“ wird gelöscht.`)) await safe(() => store.remove('exams', e.id), 'Termin gelöscht'); return done(); }
  if (r.value !== 'ok') return;
  const title = String(r.data.get('title') || '').trim();
  if (!title || !r.data.get('date')) { toast('Bezeichnung und Datum fehlen. Nichts gespeichert.', 'bad'); return; }
  await safe(() => store.put('exams', { ...(e || {}), title, kind: r.data.get('kind'), date: r.data.get('date'), areas: r.data.getAll('area'), topics: r.data.getAll('topic'), note: r.data.get('note'), done: r.data.get('done') === 'on', demo: false }), 'Termin gespeichert');
  done();
}
