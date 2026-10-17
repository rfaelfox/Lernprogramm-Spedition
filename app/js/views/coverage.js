import * as C from '../content.js';
import { esc } from '../util.js';
import { coverageBadge } from '../ui.js';

export async function render(el, { app }) {
  app.title('Abdeckung & Quellen');
  const st = C.coverageStats();
  const total = Object.values(st).reduce((a, b) => a + b, 0);
  const units = C.allUnits().filter((u) => !u.custom);
  const tasks = units.reduce((s, u) => s + (u.tasks || []).length, 0);
  const cards = units.reduce((s, u) => s + (u.flashcards || []).length, 0);
  el.innerHTML = `<h1>Abdeckung & Quellen</h1>
    <div class="note warn"><b>Ehrlicher Stand:</b> Das Programm ist noch nicht vollständig. ${st.vollstaendig} von ${total} Themen sind ausgearbeitet. Neue Lerneinheiten werden systematisch ergänzt, zuerst für die Zwischenprüfung.</div>
    <div class="grid">
      ${Object.entries(C.coverageLabel).map(([k, l]) => `<div class="card"><div class="small muted">${l}</div><div class="kpi">${st[k]}</div><div class="small muted">Themen</div></div>`).join('')}
      <div class="card"><div class="small muted">Inhalt insgesamt</div><div class="kpi">${units.length}</div><div class="small muted">Lerneinheiten · ${tasks} Aufgaben · ${cards} Karteikarten</div></div>
    </div>
    <h2 style="margin-top:22px">Abdeckung je Lernfeld und Fach</h2>
    <div class="card"><div class="table-wrap"><table><thead><tr><th>Bereich</th><th>Jahr</th><th>Thema</th><th>Status</th><th>Lerneinheiten</th></tr></thead><tbody>
      ${C.areas.map((a) => a.topics.map((t, i) => `<tr>${i === 0 ? `<td rowspan="${a.topics.length}"><b>${esc(C.areaLabel(a))}</b><br><span class="small muted">${esc(a.title)}</span></td><td rowspan="${a.topics.length}">${a.year || '1–3'}</td>` : ''}<td>${esc(t.title)}${t.alsoIn?.length ? `<br><span class="small muted">verknüpft: ${t.alsoIn.map((x) => esc(C.topicById.get(x)?.title || x)).join(', ')}</span>` : ''}</td><td>${coverageBadge(C.topicCoverage(t))}</td><td>${C.unitsOfTopic(t.id).map((u) => `<a href="#/lernen/einheit/${u.id}">${esc(u.title)}</a>`).join('<br>') || '–'}</td></tr>`).join('')).join('')}
    </tbody></table></div></div>
    <h2 style="margin-top:22px">Quellen</h2>
    <p class="small muted">Schulischer Rahmenlehrplan (Berufsschule) und betrieblicher Ausbildungsrahmenplan (Betrieb) sind getrennt gekennzeichnet. Lerninhalte sind eigenständig formuliert; die Quellen geben Struktur, Ziele und Inhalte vor.</p>
    <div class="stack">${C.sources.map((s) => `<div class="card"><div class="row between"><b>${esc(s.title)}</b><span class="badge ${s.toCheck ? 'bad' : s.kind === 'betrieb' ? 'warn' : s.kind === 'vergleich' ? '' : 'accent'}">${s.toCheck ? 'zu prüfen' : { schule: 'Schule', betrieb: 'Betrieb', recht: 'Recht', vergleich: 'nur Vergleich' }[s.kind]}</span></div>
      <p class="small" style="margin:6px 0">${esc(s.publisher)} · Stand: ${esc(s.asOf)} · geprüft am ${esc(s.checked)}</p>
      <p class="small"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.url)}</a>${s.urlNote ? `<br><span class="muted">${esc(s.urlNote)}</span>` : ''}</p>
      <p class="small muted" style="margin:0">${esc(s.note)}</p></div>`).join('')}</div>
    <h2 style="margin-top:22px">Prüfungsbezug</h2>
    <div class="stack">${C.examInfo.map((e) => `<div class="card"><b>${esc(e.title)}</b><p class="small" style="margin:6px 0">${esc(e.details)}</p><p class="small muted" style="margin:0">Quelle: ${esc(C.sourceById.get(e.source)?.title?.slice(0, 80))}… Termine und Hilfsmittel bitte bei der IHK Saarland bestätigen.</p></div>`).join('')}</div>`;
}
