import * as C from '../content.js';
import { esc, fmtNum, debounce } from '../util.js';
import { md } from '../md.js';

export async function render(el, { app, query }) {
  app.title('Lexikon & Formeln');
  const tab = query.get('tab') || 'lexikon';
  const q = (query.get('q') || '').toLowerCase();
  el.innerHTML = `<h1>Lexikon & Formeln</h1>
    <div class="tabs" role="tablist"><button role="tab" data-t="lexikon" aria-selected="${tab === 'lexikon'}">Fachbegriffe</button><button role="tab" data-t="formeln" aria-selected="${tab === 'formeln'}">Formelsammlung</button></div>
    <input type="search" id="q" placeholder="${tab === 'lexikon' ? 'Begriff suchen …' : 'Formel suchen …'}" value="${esc(q)}" style="margin-bottom:14px">
    <div id="list"></div>`;
  const list = el.querySelector('#list');
  if (tab === 'lexikon') {
    const g = C.glossary().filter((t) => !q || (t.term + ' ' + t.def).toLowerCase().includes(q));
    let letter = '';
    list.innerHTML = g.map((t) => { const L0 = t.term[0].toUpperCase(); const h = L0 !== letter ? `<h2 style="margin-top:18px">${esc((letter = L0))}</h2>` : ''; return `${h}<div class="term"><b>${esc(t.term)}</b><br>${esc(t.def)}<br><span class="small muted">aus: ${t.units.map((id) => `<a href="#/lernen/einheit/${id}?tab=begriffe">${esc(C.unitById.get(id)?.title)}</a>`).join(', ')}</span></div>`; }).join('') || '<p class="muted">Kein Begriff gefunden.</p>';
    list.insertAdjacentHTML('afterbegin', `<p class="small muted">${g.length} Fachbegriffe aus allen ausgearbeiteten Lerneinheiten.</p>`);
  } else {
    const f = C.formulas().filter((x) => !q || (x.formula + ' ' + x.example.q).toLowerCase().includes(q));
    list.innerHTML = `<p class="small muted">${f.length} Formeln aus den Rechenaufgaben, jeweils mit Einheiten und einem durchgerechneten Beispiel.</p>` + f.map((x) => `<div class="card" style="margin-bottom:12px"><p><code style="font-size:1.05rem">${esc(x.formula)}</code></p>
      <p class="small muted">Einheiten: ${(x.fields || []).map((fl) => `${esc(fl.label)}${fl.unit ? ' [' + esc(fl.unit) + ']' : ''}`).join(' · ')}</p>
      <details><summary>Beispiel mit Rechenweg</summary><div class="prose">${md(x.example.q)}${md(x.example.solution || '')}<ul>${(x.fields || []).map((fl) => `<li>${esc(fl.label)}: <b>${fmtNum(fl.answer, 4)} ${esc(fl.unit || '')}</b></li>`).join('')}</ul></div></details>
      <p class="small">aus: ${x.units.map((id) => `<a href="#/lernen/einheit/${id}">${esc(C.unitById.get(id)?.title)}</a>`).join(', ')}</p></div>`).join('');
  }
  el.querySelectorAll('[data-t]').forEach((b) => b.onclick = () => { location.hash = '#/lexikon?tab=' + b.dataset.t; });
  el.querySelector('#q').addEventListener('input', debounce((e) => { sessionStorage.setItem('noScroll', '1'); location.hash = `#/lexikon?tab=${tab}&q=${encodeURIComponent(e.target.value)}`; }, 400));
  if (q) { const i = el.querySelector('#q'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
}
