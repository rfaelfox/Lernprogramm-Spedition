// Darstellung und Bearbeitung einzelner Aufgaben (alle Aufgabentypen).
import { esc, shuffle, fmtNum } from './util.js';
import { md, mdInline } from './md.js';
import { grade, clozeGaps, maxPoints, isEmpty } from './grading.js';
import { icon } from './ui.js';

const typeLabel = { mc: 'Auswahl', text: 'Freitext', calc: 'Rechenaufgabe', booking: 'Buchungssatz', match: 'Zuordnung', order: 'Reihenfolge', cloze: 'Lückentext', case: 'Praxisfall' };
export const taskTypeLabel = (t) => t.type === 'mc' && ((t.correct || []).length > 1 || t.multi) ? 'Mehrfachauswahl' : typeLabel[t.type] || t.type;
const diffLabel = ['', 'Grundlagen', 'Anwendung', 'Prüfungsniveau'];
export const difficultyLabel = (d) => diffLabel[d] || 'Grundlagen';

// Erstellt das Bedien-Element. answer = gespeicherte Antwort (zum Fortsetzen).
// Rückgabe: { el, getAnswer, check(), reveal(), locked }
export function mountTask(task, { answer = null, mode = 'practice', onChange = () => {}, seed = 1, nested = false } = {}) {
  const el = document.createElement('div');
  el.className = nested ? 'stack' : 'task';
  let ans = answer != null ? structuredClone(answer) : initial(task);
  const fire = () => onChange(ans);
  let hintsShown = 0;
  const head = nested ? `<h4>${esc(task.title || '')}</h4>` : `<div class="row small muted" style="margin-bottom:8px"><span class="badge accent">${taskTypeLabel(task)}</span><span class="badge">${difficultyLabel(task.difficulty)}</span><span>${fmtNum(maxPoints(task))} P.</span></div>`;
  el.innerHTML = `${head}<div class="q prose">${md(task.q || '')}</div><div class="body"></div>
    ${mode === 'practice' && (task.hints || []).length ? `<div class="hints"></div><button type="button" class="btn small ghost hint-btn">Hinweis anzeigen (${task.hints.length})</button>` : ''}
    <div class="fb" aria-live="polite"></div>`;
  const body = el.querySelector('.body');
  const parts = [];

  switch (task.type) {
    case 'mc': {
      const multi = (task.correct || []).length > 1 || task.multi;
      const order = task.keepOrder ? task.options.map((_, i) => i) : shuffle(task.options.map((_, i) => i), seed);
      body.innerHTML = (multi ? '<p class="small muted">Mehrere Antworten können richtig sein.</p>' : '') + order.map((i) => `<label class="opt ${ans.includes(i) ? 'sel' : ''}" data-i="${i}"><input type="${multi ? 'checkbox' : 'radio'}" name="mc-${esc(task.id)}" value="${i}" ${ans.includes(i) ? 'checked' : ''}><span>${mdInline(task.options[i])}</span></label>`).join('');
      body.querySelectorAll('input').forEach((inp) => inp.addEventListener('change', () => {
        ans = Array.from(body.querySelectorAll('input:checked')).map((x) => Number(x.value));
        body.querySelectorAll('.opt').forEach((o) => o.classList.toggle('sel', ans.includes(Number(o.dataset.i))));
        fire();
      }));
      break;
    }
    case 'cloze': {
      const segs = String(task.text || '').split(/\[\[[^\]]+\]\]/);
      const gaps = clozeGaps(task.text);
      body.innerHTML = `<div class="prose" style="line-height:2.2">${segs.map((s, i) => mdInline(s) + (i < gaps.length ? `<input class="cloze-input" type="text" data-i="${i}" aria-label="Lücke ${i + 1}" value="${esc(ans[i] || '')}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(7, gaps[i][0].length + 2)}ch">` : '')).join('')}</div>`;
      body.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', () => { ans[Number(inp.dataset.i)] = inp.value; fire(); }));
      break;
    }
    case 'calc': {
      body.innerHTML = (mode === 'practice' && task.formula ? `<details class="small"><summary>Formel anzeigen</summary><p><code>${esc(task.formula)}</code></p></details>` : '') +
        (task.fields || []).map((f, i) => `<div class="calc-row"><label for="f-${esc(task.id)}-${i}" style="margin:0">${esc(f.label)}${i === task.fields.length - 1 ? ' <span class="badge">Ergebnis</span>' : ''}</label><input id="f-${esc(task.id)}-${i}" type="text" inputmode="decimal" data-id="${esc(f.id)}" value="${esc(ans[f.id] || '')}" autocomplete="off"><span class="unit">${esc(f.unit || '')}</span></div>`).join('') +
        '<p class="small muted">Komma oder Punkt sind erlaubt, Tausenderpunkte und Einheiten werden ignoriert.</p>';
      body.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', () => { ans[inp.dataset.id] = inp.value; fire(); }));
      break;
    }
    case 'booking': {
      const accounts = Array.from(new Set([...(task.accounts || []), ...(task.entries || []).map((e) => e.account)])).sort((a, b) => a.localeCompare(b, 'de'));
      const draw = () => {
        body.innerHTML = `<div class="booking"><div class="booking-row small muted"><span>Seite</span><span>Konto</span><span>Betrag (€)</span><span></span></div>${ans.map((r, i) => `<div class="booking-row" data-i="${i}">
          <select data-k="side" aria-label="Seite Zeile ${i + 1}"><option value="S" ${r.side === 'S' ? 'selected' : ''}>Soll</option><option value="H" ${r.side === 'H' ? 'selected' : ''}>Haben</option></select>
          <select data-k="account" aria-label="Konto Zeile ${i + 1}"><option value="">– Konto –</option>${accounts.map((a) => `<option ${r.account === a ? 'selected' : ''}>${esc(a)}</option>`).join('')}</select>
          <input data-k="amount" type="text" inputmode="decimal" value="${esc(r.amount || '')}" aria-label="Betrag Zeile ${i + 1}">
          <button type="button" class="btn icon ghost" data-del="${i}" aria-label="Zeile entfernen">${icon('x')}</button></div>`).join('')}
          <button type="button" class="btn small add-row">${icon('plus')} Zeile</button>
          <p class="small muted">Erst alle Soll-Buchungen, dann „an“ die Haben-Buchungen. Reihenfolge der Zeilen spielt bei der Bewertung keine Rolle.</p></div>`;
        body.querySelectorAll('[data-k]').forEach((x) => x.addEventListener('input', () => { const i = Number(x.closest('[data-i]').dataset.i); ans[i][x.dataset.k] = x.value; fire(); }));
        body.querySelectorAll('[data-del]').forEach((b) => b.onclick = () => { ans.splice(Number(b.dataset.del), 1); if (!ans.length) ans.push({ side: 'S', account: '', amount: '' }); draw(); fire(); });
        body.querySelector('.add-row').onclick = () => { ans.push({ side: 'H', account: '', amount: '' }); draw(); fire(); };
      };
      draw();
      break;
    }
    case 'match': {
      const rights = shuffle(task.pairs.map((_, i) => i), seed + 7);
      body.innerHTML = task.pairs.map((p, i) => `<div class="match-row"><span>${mdInline(p[0])}</span><select data-i="${i}" aria-label="Zuordnung für ${esc(p[0])}"><option value="">– wählen –</option>${rights.map((j) => `<option value="${j}" ${ans[i] === j ? 'selected' : ''}>${esc(task.pairs[j][1])}</option>`).join('')}</select></div>`).join('');
      body.querySelectorAll('select').forEach((s) => s.addEventListener('change', () => { ans[Number(s.dataset.i)] = s.value === '' ? null : Number(s.value); fire(); }));
      break;
    }
    case 'order': {
      if (!answer) ans = shuffle(task.items.map((_, i) => i), seed + 3);
      const draw = () => {
        body.innerHTML = '<p class="small muted">Bringe die Schritte mit den Pfeilen in die richtige Reihenfolge.</p>' + ans.map((idx, pos) => `<div class="order-item"><b>${pos + 1}.</b><span>${mdInline(task.items[idx])}</span><button type="button" class="btn icon ghost" data-up="${pos}" aria-label="nach oben" ${pos === 0 ? 'disabled' : ''}>${icon('up')}</button><button type="button" class="btn icon ghost" data-down="${pos}" aria-label="nach unten" ${pos === ans.length - 1 ? 'disabled' : ''}>${icon('down')}</button></div>`).join('');
        body.querySelectorAll('[data-up]').forEach((b) => b.onclick = () => { const p = Number(b.dataset.up); [ans[p - 1], ans[p]] = [ans[p], ans[p - 1]]; draw(); fire(); body.querySelector(`[data-up="${p - 1}"]`)?.focus(); });
        body.querySelectorAll('[data-down]').forEach((b) => b.onclick = () => { const p = Number(b.dataset.down); [ans[p + 1], ans[p]] = [ans[p], ans[p + 1]]; draw(); fire(); body.querySelector(`[data-down="${p + 1}"]`)?.focus(); });
      };
      draw();
      break;
    }
    case 'text': {
      body.innerHTML = `<textarea aria-label="Deine Antwort" placeholder="Deine Antwort …">${esc(ans.text || '')}</textarea>`;
      body.querySelector('textarea').addEventListener('input', (e) => { ans.text = e.target.value; ans.self = null; fire(); });
      break;
    }
    case 'case': {
      if (task.intro) body.insertAdjacentHTML('beforeend', `<div class="note prose">${md(task.intro)}</div>`);
      (task.parts || []).forEach((p, i) => {
        const sub = mountTask({ ...p, title: `Teilaufgabe ${String.fromCharCode(97 + i)}) · ${taskTypeLabel(p)} · ${fmtNum(maxPoints(p))} P.` }, { answer: ans[i], mode, nested: true, seed: seed + i, onChange: (a) => { ans[i] = a; fire(); } });
        const wrap = document.createElement('div'); wrap.className = 'card flat'; wrap.style.marginTop = '12px'; wrap.appendChild(sub.el);
        body.appendChild(wrap); parts.push(sub);
      });
      break;
    }
  }

  const hb = el.querySelector(':scope > .hint-btn');
  if (hb) hb.onclick = () => {
    const box = el.querySelector(':scope > .hints');
    if (hintsShown < task.hints.length) { box.insertAdjacentHTML('beforeend', `<div class="note">${md(`**Hinweis ${hintsShown + 1}:** ` + task.hints[hintsShown])}</div>`); hintsShown++; }
    hb.textContent = hintsShown < task.hints.length ? `Nächster Hinweis (${task.hints.length - hintsShown})` : 'Alle Hinweise angezeigt';
    if (hintsShown >= task.hints.length) hb.disabled = true;
  };

  const api = {
    el, task, parts,
    get hintsUsed() { return hintsShown; },
    getAnswer: () => (task.type === 'case' ? parts.map((p) => p.getAnswer()) : ans),
    isEmpty: () => isEmpty(task, api.getAnswer()),
    lock() { el.querySelectorAll('input,select,textarea,.body button').forEach((x) => { x.disabled = true; }); parts.forEach((p) => p.lock()); },
    // Wertet aus und zeigt Rückmeldung. Bei Freitext folgt die Selbstbewertung.
    showResult(onSelf) {
      const result = grade(task, api.getAnswer());
      const fb = el.querySelector(':scope > .fb');
      if (task.type === 'case') {
        parts.forEach((p, i) => p.showResult(() => { const r = grade(task, api.getAnswer()); onSelf?.(r); renderCaseSum(fb, r); }));
        renderCaseSum(fb, result);
        return result;
      }
      fb.innerHTML = feedbackHtml(task, result, api.getAnswer());
      markOptions(el, task, api.getAnswer());
      if (task.type === 'text') wireSelf(fb, task, result, (pts) => { ans.self = pts; const r = grade(task, ans); fb.querySelector('.self-result').innerHTML = `Selbstbewertung: <b>${fmtNum(pts)} von ${fmtNum(r.max)} Punkten</b>`; onSelf?.(r); });
      return result;
    },
    revealSolution() {
      const fb = el.querySelector(':scope > .fb');
      if (task.type === 'case') { parts.forEach((p) => p.revealSolution()); return; }
      fb.innerHTML = `<div class="feedback"><b>Musterlösung</b>${solutionHtml(task)}</div>`;
    }
  };
  return api;
}

function renderCaseSum(fb, r) {
  fb.innerHTML = `<div class="feedback ${r.score == null ? '' : r.score >= 0.999 ? 'ok' : r.score > 0 ? 'part' : 'bad'}"><b>Praxisfall gesamt: ${r.points == null ? 'Selbstbewertung offener Teilaufgaben fehlt noch' : `${fmtNum(r.points)} von ${fmtNum(r.max)} Punkten`}</b></div>`;
}

function initial(task) {
  switch (task.type) {
    case 'mc': return [];
    case 'cloze': return [];
    case 'calc': return {};
    case 'booking': return [{ side: 'S', account: '', amount: '' }, { side: 'H', account: '', amount: '' }];
    case 'match': return task.pairs.map(() => null);
    case 'text': return { text: '', self: null };
    case 'case': return (task.parts || []).map(() => null);
    default: return null;
  }
}

function markOptions(el, task, ans) {
  if (task.type !== 'mc') return;
  const correct = new Set(task.correct);
  el.querySelectorAll('.opt').forEach((o) => {
    const i = Number(o.dataset.i);
    o.classList.toggle('right', correct.has(i));
    o.classList.toggle('wrong', !correct.has(i) && ans.includes(i));
  });
}

export function solutionHtml(task) {
  let extra = '';
  switch (task.type) {
    case 'mc': extra = `<p>Richtig: ${(task.correct || []).map((i) => '„' + mdInline(task.options[i]) + '“').join(', ')}</p>`; break;
    case 'cloze': extra = `<p>${clozeGaps(task.text).map((g, i) => `Lücke ${i + 1}: <b>${esc(g[0])}</b>`).join(' · ')}</p>`; break;
    case 'calc': extra = (task.formula ? `<p>Formel: <code>${esc(task.formula)}</code></p>` : '') + `<ul>${(task.fields || []).map((f) => `<li>${esc(f.label)}: <b>${fmtNum(f.answer, 4)} ${esc(f.unit || '')}</b></li>`).join('')}</ul>`; break;
    case 'booking': extra = bookingTable(task.entries); break;
    case 'match': extra = `<ul>${task.pairs.map((p) => `<li>${mdInline(p[0])} → <b>${mdInline(p[1])}</b></li>`).join('')}</ul>`; break;
    case 'order': extra = `<ol>${task.items.map((x) => `<li>${mdInline(x)}</li>`).join('')}</ol>`; break;
    case 'text': extra = `<div class="prose">${md(task.model || '')}</div>`; break;
  }
  return extra + (task.solution ? `<div class="prose">${md(task.solution)}</div>` : '');
}

export function bookingTable(entries) {
  const s = entries.filter((e) => e.side === 'S'), h = entries.filter((e) => e.side === 'H');
  return `<div class="table-wrap"><table><thead><tr><th>Soll</th><th class="num">€</th><th></th><th>Haben</th><th class="num">€</th></tr></thead><tbody>${Array.from({ length: Math.max(s.length, h.length) }, (_, i) => `<tr><td>${esc(s[i]?.account || '')}</td><td class="num">${s[i] ? fmtNum(s[i].amount) : ''}</td><td>${i === 0 ? 'an' : ''}</td><td>${esc(h[i]?.account || '')}</td><td class="num">${h[i] ? fmtNum(h[i].amount) : ''}</td></tr>`).join('')}</tbody></table></div>`;
}

function feedbackHtml(task, r, ans) {
  if (task.type === 'text') {
    return `<div class="feedback"><p><b>Vergleiche deine Antwort mit der Musterlösung und bewerte dich selbst.</b></p>
      <div class="prose">${md(task.model || '')}</div>
      ${(task.criteria || []).length ? `<p><b>Bewertungskriterien</b> <span class="small muted">(✓ = Schlüsselbegriffe gefunden. Das ist nur ein automatischer Hinweis, keine sichere Bewertung.)</span></p><ul>${r.details.map((d) => `<li>${d.ok ? '✓' : '○'} ${esc(d.label)} <span class="muted">(${fmtNum(d.points)} P.)</span></li>`).join('')}</ul>` : ''}
      ${task.solution ? `<div class="prose">${md(task.solution)}</div>` : ''}
      <div class="field"><label>Wie viele Punkte gibst du dir? <span class="muted small">(Vorschlag nach Schlüsselbegriffen: ${fmtNum(r.suggested)})</span></label>
      <div class="chips self">${Array.from({ length: Math.round(r.max * 2) + 1 }, (_, i) => i / 2).filter((x) => Number.isInteger(x) || r.max <= 4).map((p) => `<button type="button" class="chip" data-p="${p}">${fmtNum(p)}</button>`).join('')}</div></div>
      <p class="self-result small"></p></div>`;
  }
  const cls = r.score >= 0.999 ? 'ok' : r.score > 0 ? 'part' : 'bad';
  const head = r.score >= 0.999 ? 'Richtig!' : r.score > 0 ? 'Teilweise richtig.' : 'Leider nicht richtig.';
  let detail = '';
  if (task.type === 'calc') detail = `<ul>${r.details.map((d) => `<li>${d.ok ? '<span class="pill-ok">✓</span>' : '<span class="pill-bad">✗</span>'} ${esc(d.label)}: deine Eingabe „${esc(d.given || '–')}“${d.ok ? '' : `, richtig: <b>${fmtNum(d.expected, 4)} ${esc(d.unit)}</b>`}</li>`).join('')}</ul>`;
  if (task.type === 'cloze') detail = `<ul>${r.details.map((d, i) => `<li>${d.ok ? '<span class="pill-ok">✓</span>' : '<span class="pill-bad">✗</span>'} Lücke ${i + 1}: „${esc(d.given || '–')}“${d.ok ? '' : ` → <b>${esc(d.expected)}</b>`}</li>`).join('')}</ul>`;
  if (task.type === 'match') detail = `<ul>${r.details.map((d) => `<li>${d.ok ? '<span class="pill-ok">✓</span>' : '<span class="pill-bad">✗</span>'} ${mdInline(d.left)} → ${d.ok ? esc(d.expected) : `<b>${esc(d.expected)}</b>`}</li>`).join('')}</ul>`;
  if (task.type === 'order') detail = `<ol>${r.details.map((d) => `<li>${d.ok ? '<span class="pill-ok">✓</span>' : '<span class="pill-bad">✗</span>'} ${mdInline(d.expected)}</li>`).join('')}</ol>`;
  if (task.type === 'booking') detail = `<ul>${r.details.map((d) => d.missing ? `<li><span class="pill-bad">fehlt:</span> ${d.missing.side === 'S' ? 'Soll' : 'Haben'} ${esc(d.missing.account)} ${fmtNum(d.missing.amount)} €</li>` : `<li>${d.ok ? '<span class="pill-ok">✓</span>' : '<span class="pill-bad">✗</span>'} ${d.given.side === 'S' ? 'Soll' : 'Haben'} ${esc(d.given.account)} ${esc(d.given.amount)} ${d.ok ? '' : '– ' + esc(d.why)}</li>`).join('')}</ul>`;
  return `<div class="feedback ${cls}"><p><b>${head}</b> ${fmtNum(r.points)} von ${fmtNum(r.max)} Punkten.</p>${detail}<details ${r.score < 0.999 ? 'open' : ''}><summary><b>Lösung und Begründung</b></summary>${solutionHtml(task)}</details></div>`;
}

function wireSelf(fb, task, r, cb) {
  fb.querySelectorAll('.self [data-p]').forEach((b) => b.onclick = () => {
    fb.querySelectorAll('.self [data-p]').forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
    cb(Number(b.dataset.p));
  });
}
