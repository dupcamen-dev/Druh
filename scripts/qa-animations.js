/* QA: load the site in a real browser, scroll through every section,
 * hover buttons/cards, and flag anything that is stuck invisible. */
const puppeteer = require("puppeteer-core");

const CHROME = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
].find((p) => require("fs").existsSync(p));

const ROOT = process.env.QA_BASE || "http://localhost:3000";

function flag(msg) {
  console.error("### ISSUE: " + msg);
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function checkStuckInVisible(page, sel) {
  // Any element matching `sel` that is currently in the viewport but fully hidden?
  const bad = await page.evaluate((sel) => {
    const vh = window.innerHeight;
    const out = [];
    document.querySelectorAll(sel).forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const inView = r.top < vh - 10 && r.bottom > 0;
      if (!inView) return;
      const cs = getComputedStyle(el);
      if (cs.opacity === "0" && (cs.transform === "none" || cs.transform.includes("matrix(1, 0, 0, 1, 0, 0)"))) {
        out.push({
          idx: i,
          cls: (el.className || "").toString().slice(0, 90),
          top: Math.round(r.top),
        });
      }
    });
    return out;
  }, sel);
  for (const b of bad) {
    flag(`${sel}[${b.idx}] opacity:0 in viewport (top=${b.top}) class="${b.cls}"`);
  }
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: process.env.QA_HEADLESS !== "0",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1440,900"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
  const rm = await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  console.log("prefers-reduced-motion:", rm ? "reduce (a11y OFF)" : "no-preference (animations ON)");
  page.on("console", (m) => {
    if (m.type() === "error") flag(`console.error: ${m.text().slice(0, 200)}`);
  });
  page.on("pageerror", (e) => flag(`pageerror: ${String(e).slice(0, 200)}`));

  for (const route of ["/", "/about"]) {
    console.log(`\n=== ${route} ===`);
    await page.goto(ROOT + route, { waitUntil: "networkidle0", timeout: 60000 });
    await sleep(700);

    // 1) hero / top-of-page elements must be visible
    await checkStuckInVisible(page, "h1, .hero-enter > *, [data-qa-reveal], .card-lift");

    // 2) walk the page, one screen at a time
    const height = await page.evaluate(() => document.body.scrollHeight);
    let y = 0;
    while (y < height) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await sleep(350);
      await page.evaluate(() => {
        // hover the center element to trigger hover effects
        const el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        if (el) {
          el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
          el.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        }
      });
      await sleep(450);
      y += 700;
    }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await sleep(400);
    await checkStuckInVisible(page, ".card-lift");
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(300);
  }

  // 3) interactive checks on a few buttons
  await page.goto(ROOT + "/", { waitUntil: "networkidle0", timeout: 60000 });
  await sleep(500);

  const heroBtn = await page.$eval("a.shine", (a) => {
    const cs = getComputedStyle(a);
    const before = getComputedStyle(a, "::after");
    return {
      visible: cs.visibility !== "hidden" && cs.opacity !== "0",
      shine: before.transitionDuration,
    };
  }).catch(() => null);
  console.log("hero button:", JSON.stringify(heroBtn));

  const marquee = await page.evaluate(() => {
    const track = document.querySelector(".marquee-track");
    if (!track) return null;
    const cs = getComputedStyle(track);
    return { animationName: cs.animationName, duration: cs.animationDuration, infinite: cs.animationIterationCount };
  });
  console.log("marquee:", JSON.stringify(marquee));

  // count motion-driven reveal containers
  const motionCount = await page.evaluate(() => {
    const hasOpacity0 = [...document.querySelectorAll("h1,h2,h3,a,div")].filter(
      (el) => getComputedStyle(el).opacity === "0" && el.getBoundingClientRect().height > 0
    ).length;
    return hasOpacity0;
  });
  console.log("still-hidden elements at top of page:", motionCount);

  const dumpHidden = await page.evaluate(() => {
    const vh = window.innerHeight;
    const out = [];
    document.querySelectorAll("main *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top >= vh) return;
      if (r.bottom < 0) return;
      const cs = getComputedStyle(el);
      if (cs.opacity === "0" && r.height > 0 && r.width > 0) {
        out.push((el.tagName + "." + (el.className || "").toString().split(" ").slice(0, 4).join(".")).slice(0, 120));
      }
    });
    return out.slice(0, 20);
  });
  console.log("hidden-but-in-view (dump):");
  for (const d of dumpHidden) console.log("   ", d);

  await page.goto(ROOT + "/about", { waitUntil: "networkidle0", timeout: 60000 });
  await sleep(1000);
  const aboutDump = await page.evaluate(() => {
    const vh = window.innerHeight;
    const out = [];
    document.querySelectorAll("main *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top >= vh || r.bottom < 0) return;
      const cs = getComputedStyle(el);
      if (cs.opacity === "0" && r.height > 0 && r.width > 0) {
        out.push((el.tagName + "." + (el.className || "").toString().split(" ").slice(0, 4).join(".")).slice(0, 120));
      }
    });
    return out.slice(0, 20);
  });
  console.log("about: hidden-but-in-view =", aboutDump.length);
  for (const d of aboutDump) console.log("   ", d);

  await browser.close();
  console.log("\nQA done.");
}

run().catch((e) => {
  console.error("QA crashed:", e);
  process.exit(1);
});