import * as store from '../store.js';
import * as C from '../content.js';
import { esc, debounce, normText } from '../util.js';
import { icon } from '../ui.js';

// Themenübergreifende Suche über Lerneinheiten, Begriffe, Aufgaben, Lernzettel, Materialien, Notizen, Lesezeichen.
export async function render(el, { app, query }) {
  app.title('Suche');
  const q = query.get('q') || '';
  el.innerHTML = `<h1>Suche</h1><input type="search" id="q" placeholder="Suchbegriff, z. B. Haftung, Vorsteuer, Incoterms …" value="${esc(q)}" autofocus>
    <div id="res" style="margin-top:16px"></div>
    <h2 style="margin-top:24px">Lesezeichen</h2><div class="card">${store.all('bookmarks').map((b) => `<a class="row" style="padding:6px 0;text-decoration:none;color:inherit" href="#/lernen/einheit/${b.ref}">${icon('bookmark')} ${esc(b.title)}</a>`).join('') || '<p class="muted">Noch keine Lesezeichen. Setze sie in einer Lerneinheit oben rechts.</p>'}</div>`;
  const input = el.querySelector('#q');
  const run = () => {
    const raw = input.value.trim();
    const words = normText(raw).split(' ').filter((w) => w.length > 1);
    const res = el.querySelector('#res');
    if (!words.length) { res.innerHTML = ''; return; }
    const match = (s) => { const n = normText(s); return words.every((w) => n.includes(w)); };
    const groups = [];
    const units = C.allUnits().filter((u) => match([u.title, u.simple, u.deep, u.summary, (u.terms || []).map((t) => t.term + ' ' + t.def).join(' '), (u.rules || []).join(' ')].join(' ')));
    groups.push(['Lerneinheiten', units.map((u) => [`#/lernen/einheit/${u.id}`, u.title, C.areaLabel(C.areaById.get(u.area))])]);
    const topics = C.areas.flatMap((a) => a.topics.map((t) => ({ t, a }))).filter(({ t }) => match(t.title));
    groups.push(['Themen', topics.map(({ t, a }) => [`#/lernen/bereich/${a.id}`, t.title, C.areaLabel(a)])]);
    groups.push(['Fachbegriffe', C.glossary().filter((t) => match(t.term + ' ' + t.def)).map((t) => [`#/lexikon?q=${encodeURIComponent(t.term)}`, t.term, t.def.slice(0, 90)])]);
    const tasks = C.allUnits().flatMap((u) => (u.tasks || []).map((t) => ({ t, u }))).filter(({ t }) => match(t.q + ' ' + (t.solution || '')));
    groups.push(['Aufgaben', tasks.slice(0, 15).map(({ t, u }) => [`#/ueben?unit=${u.id}`, t.q.replace(/[*#|]/g, '').slice(0, 90), u.title])]);
    groups.push(['Lernzettel', store.all('sheets').filter((s) => match(s.title + ' ' + (s.versions[s.current]?.md || ''))).map((s) => [`#/lernzettel/${s.id}`, s.title, 'Lernzettel'])]);
    groups.push(['Materialien', store.all('materials').filter((m) => match([m.title, m.text, m.ocrText, m.tags].join(' '))).map((m) => [`#/materialien/${m.id}`, m.title, m.kind === 'note' ? 'Notiz' : 'Material'])]);
    groups.push(['Notizen', store.all('notes').filter((n) => match(n.title + ' ' + n.text)).map((n) => [`#/lernen/einheit/${n.ref}?tab=notiz`, n.title, ''])]);
    const total = groups.reduce((s, g) => s + g[1].length, 0);
    res.innerHTML = `<p class="small muted">${total} Treffer</p>` + groups.filter((g) => g[1].length).map(([h, items]) => `<h2>${h}</h2><div class="card">${items.map(([href, t, sub]) => `<a href="${href}" style="display:block;padding:8px 0;border-bottom:1px solid var(--line);text-decoration:none;color:inherit"><b>${esc(t)}</b>${sub ? `<br><span class="small muted">${esc(sub)}</span>` : ''}</a>`).join('')}</div>`).join('');
  };
  input.addEventListener('input', debounce(() => { history.replaceState(null, '', '#/suche?q=' + encodeURIComponent(input.value)); run(); }, 250));
  run();
  input.focus();
}
