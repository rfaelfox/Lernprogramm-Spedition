import { chromium } from 'playwright';
const [,, route = '', name = 'shot', w = '1280', dark = ''] = process.argv;
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: Number(w), height: Number(w) < 600 ? 844 : 900 }, colorScheme: dark ? 'dark' : 'light', deviceScaleFactor: 1 });
const p = await ctx.newPage();
await p.goto('http://localhost:8765/#/' + route); await p.waitForTimeout(900);
await p.screenshot({ path: `/tmp/claude-0/-home-claude/395ddc36-ccd1-55e6-8857-7b3d5c2dc0a2/scratchpad/${name}.png`, fullPage: false });
await b.close();
