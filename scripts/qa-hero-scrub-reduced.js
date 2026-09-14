const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--autoplay-policy=no-user-gesture-required"],
  });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2500));

  const scroll = (y) => page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);

  const samples = [];
  for (const s of [0, 500, 1000, 1500, 2000]) {
    await scroll(s);
    await new Promise((r) => setTimeout(r, 300));
    const t = await page.evaluate(() => document.querySelector(".hero-video").currentTime);
    samples.push({ scrollY: s, currentTime: +t.toFixed(3) });
  }
  console.log("REDUCED SCRUB:", JSON.stringify(samples));
  console.log("errors:", errors.length ? errors : "none");
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });