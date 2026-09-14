const puppeteer = require("puppeteer-core");
const CHROME = ["C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe","C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"].find(p => require("fs").existsSync(p));
const ROOT = "http://localhost:3000";

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const allIssues = [];

  for (const route of ["/", "/about", "/menu"]) {
    await page.goto(ROOT + route, { waitUntil: "networkidle0", timeout: 60000 });
    await new Promise(r => setTimeout(r, 1200));

    const issues = await page.evaluate((route) => {
      function parseRGBA(str) {
        if (!str) return null;
        const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
        if (!m) return null;
        return { r: +m[1], g: +m[2], b: +m[3], a: m[4] !== undefined ? +m[4] : 1 };
      }
      function luminance(r, g, b) {
        const srgb = [r, g, b].map(c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); });
        return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
      }
      function contrastRatio(fg, bg) {
        const L1 = luminance(fg.r, fg.g, fg.b);
        const L2 = luminance(bg.r, bg.g, bg.b);
        return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      }
      function blend(fg, bg) {
        const a = fg.a;
        return { r: Math.round(a * fg.r + (1 - a) * bg.r), g: Math.round(a * fg.g + (1 - a) * bg.g), b: Math.round(a * fg.b + (1 - a) * bg.b), a: 1 };
      }
      function getEffectiveBg(el) {
        let acc = { r: 255, g: 255, b: 255, a: 1 };
        let node = el;
        while (node && node !== document.documentElement) {
          const cs = getComputedStyle(node);
          const bg = parseRGBA(cs.backgroundColor);
          if (bg && bg.a > 0) { acc = bg.a >= 1 ? bg : blend(bg, acc); if (bg.a >= 1) break; }
          node = node.parentElement;
        }
        return acc;
      }

      const results = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const text = walker.currentNode.textContent.trim();
        if (!text) continue;
        const el = walker.currentNode.parentElement;
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.height < 1 || r.width < 1 || r.top > window.innerHeight + 200) continue;
        const cs = getComputedStyle(el);
        if (cs.opacity === "0" || cs.visibility === "hidden" || cs.display === "none") continue;
        const fg = parseRGBA(cs.color);
        if (!fg) continue;
        const bg = getEffectiveBg(el);
        const blendedFg = fg.a < 1 ? blend(fg, bg) : { r: fg.r, g: fg.g, b: fg.b, a: 1 };
        const ratio = contrastRatio(blendedFg, bg);
        const fontSize = parseFloat(cs.fontSize);
        const isBold = parseInt(cs.fontWeight) >= 700;
        const isLarge = fontSize >= 24 || (fontSize >= 18.66 && isBold);
        const minRatio = isLarge ? 3.0 : 4.5;
        if (ratio < minRatio) {
          const bgHex = "#" + [bg.r, bg.g, bg.b].map(c => c.toString(16).padStart(2, "0")).join("");
          const fgHex = "#" + [blendedFg.r, blendedFg.g, blendedFg.b].map(c => c.toString(16).padStart(2, "0")).join("");
          results.push({ route, text: text.replace(/\s+/g, " ").slice(0, 50), fg: fgHex + (fg.a < 1 ? " a" + fg.a : ""), bg: bgHex, ratio: ratio.toFixed(2), size: fontSize.toFixed(1), weight: cs.fontWeight, tag: el.tagName, isLarge, line: Math.round(r.top) });
        }
      }
      return results.sort((a, b) => parseFloat(a.ratio) - parseFloat(b.ratio));
    }, route);
    allIssues.push(...issues);
  }

  console.log(`\n=== CONTRAST AUDIT: ${allIssues.length} issues found ===\n`);
  const grouped = {};
  for (const i of allIssues) {
    const key = `${i.fg} on ${i.bg} (min ${i.isLarge ? "3.0L" : "4.5N"})`;
    (grouped[key] = grouped[key] || []).push(i);
  }
  for (const [pair, items] of Object.entries(grouped)) {
    console.log(`${pair}  ratio ${items[0].ratio}:1`);
    for (const i of items.slice(0, 8)) {
      console.log(`  ${i.route.padEnd(8)} ${i.tag.padEnd(5)} ${i.size.padStart(5)}/${i.weight.padStart(4)} top:${String(i.line).padStart(4)}  "${i.text}"`);
    }
    if (items.length > 8) console.log(`  ... +${items.length - 8} more`);
    console.log("");
  }

  await browser.close();
})();
