// Einfache SVG-Diagramme ohne Bibliothek.
import { esc, fmtDate, fmtNum } from './util.js';

const COLORS = ['#0b8ea0', '#1565c0', '#c2185b', '#ef6c00', '#2e7d32', '#6a1b9a', '#5d4037', '#00838f'];

// Notenverlauf: y-Achse 1 (oben) bis 6 (unten), je Fach eine Linie.
export function lineChart(grades, subjects) {
  const pts = grades.filter((g) => g.date && g.grade).sort((a, b) => a.date.localeCompare(b.date));
  if (pts.length < 2) return '';
  const W = 760, H = 260, pl = 36, pr = 14, pt = 14, pb = 34;
  const t0 = new Date(pts[0].date).getTime(), t1 = new Date(pts[pts.length - 1].date).getTime() || t0 + 1;
  const x = (d) => pl + ((new Date(d).getTime() - t0) / Math.max(1, t1 - t0)) * (W - pl - pr);
  const y = (g) => pt + ((g - 1) / 5) * (H - pt - pb);
  const bySub = new Map();
  pts.forEach((g) => { if (!bySub.has(g.subject)) bySub.set(g.subject, []); bySub.get(g.subject).push(g); });
  const subs = Array.from(bySub.keys());
  const grid = [1, 2, 3, 4, 5, 6].map((g) => `<line class="axis" x1="${pl}" x2="${W - pr}" y1="${y(g)}" y2="${y(g)}"/><text x="${pl - 8}" y="${y(g) + 4}" text-anchor="end">${g}</text>`).join('');
  const lines = subs.map((s, i) => {
    const c = COLORS[i % COLORS.length];
    const arr = bySub.get(s);
    return `<polyline fill="none" stroke="${c}" stroke-width="2.5" points="${arr.map((g) => `${x(g.date).toFixed(1)},${y(g.grade).toFixed(1)}`).join(' ')}"/>` +
      arr.map((g) => `<circle cx="${x(g.date).toFixed(1)}" cy="${y(g.grade).toFixed(1)}" r="4.5" fill="${c}"><title>${esc(fmtDate(g.date))}: ${esc(g.title)} – ${fmtNum(g.grade)}</title></circle>`).join('');
  }).join('');
  const labels = `<text x="${pl}" y="${H - 10}">${esc(fmtDate(pts[0].date))}</text><text x="${W - pr}" y="${H - 10}" text-anchor="end">${esc(fmtDate(pts[pts.length - 1].date))}</text>`;
  const legend = `<div class="row small" style="margin-top:6px">${subs.map((s, i) => `<span class="row" style="gap:6px"><i style="width:14px;height:4px;border-radius:2px;background:${COLORS[i % COLORS.length]};display:inline-block"></i>${esc(subjects.find((x) => x.id === s)?.short || s)}</span>`).join('')}</div>`;
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Notenverlauf über die Zeit">${grid}${lines}${labels}</svg>${legend}<p class="small muted">Oben = bessere Note. Punkte antippen bzw. mit der Maus berühren zeigt Details.</p>`;
}
