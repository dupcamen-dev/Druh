const puppeteer = require("puppeteer-core");

async function run(label, reducedMotion) {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--autoplay-policy=no-user-gesture-required"],
  });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: reducedMotion ? "reduce" : "no-preference" }]);
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  const warns = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
    if (m.type() === "warning") warns.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2500));

  const res = await page.evaluate(() => {
    const hero = document.querySelector("#hero");
    const track = document.querySelector(".hero-track");
    const pin = document.querySelector(".hero-pin");
    const video = document.querySelector(".hero-video");
    const textVisible = getComputedStyle(document.querySelector("#hero h1")).visibility;
    return {
      heroRect: Math.round(hero.getBoundingClientRect().height),
      trackH: track ? Math.round(track.getBoundingClientRect().height) : null,
      trackPos: track ? getComputedStyle(track).position : null,
      pinPos: pin ? getComputedStyle(pin).position : null,
      videoTime: video.currentTime,
      videoSrcMatch: video && video.getAttribute("src") === "/videos/hero-scrub.mp4",
      h1: document.querySelector("#hero h1").innerText.replace(/\s+/g, " "),
    };
  });
  const hydration = errors.filter((e) => /hydration|Hydration/i.test(e));
  console.log(`[${label}]`, JSON.stringify(res));
  console.log(`[${label}] hydration-errors:`, hydration.length ? hydration : "none");
  console.log(`[${label}] all console errors:`, errors.length ? errors : "none");
  console.log(`[${label}] warnings:`, warns.length ? warns.slice(0, 5) : "none");
  await browser.close();
}

(async () => {
  await run("normal", false);
  await run("reduced", true);
})().catch((e) => { console.error(e); process.exit(1); });