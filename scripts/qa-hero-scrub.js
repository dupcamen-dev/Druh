const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--autoplay-policy=no-user-gesture-required"],
  });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2500));

  const scroll = (y) => page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);

  const base = await page.evaluate(() => {
    const hero = document.querySelector("#hero");
    const video = document.querySelector(".hero-video");
    const track = document.querySelector(".hero-track");
    const pin = document.querySelector(".hero-pin");
    const rect = hero.getBoundingClientRect();
    return {
      heroHeight: rect.height,
      heroMinH: getComputedStyle(hero).minHeight,
      trackHeight: track ? track.getBoundingClientRect().height : null,
      trackPos: track ? getComputedStyle(track).position : null,
      pinPos: pin ? getComputedStyle(pin).position : null,
      pinTop: pin ? getComputedStyle(pin).top : null,
      pinH: pin ? pin.getBoundingClientRect().height : null,
      videoSrc: video ? video.getAttribute("src") : null,
      videoMuted: video ? video.muted : null,
      videoPlaysInline: video ? video.playsInline : null,
    };
  });
  console.log("BASE:", JSON.stringify(base));

  const probe = await page.evaluate(() => {
    const v = document.querySelector(".hero-video");
    return {
      readyState: v.readyState,
      currentTime: v.currentTime,
      duration: v.duration,
      paused: v.paused,
      error: v.error ? v.error.message : null,
    };
  });
  console.log("VIDEO at scroll 0:", JSON.stringify(probe));

  const samples = [];
  const steps = [100, 400, 900, 1400, 1900, 2400, 3000, 3400, 3900, 4400, 4900, 5400];
  for (const s of steps) {
    await scroll(s);
    await new Promise((r) => setTimeout(r, 250));
    const t = await page.evaluate(() => document.querySelector(".hero-video").currentTime);
    const p = await page.evaluate(() => {
      const v = document.querySelector(".hero-video");
      const r = document.querySelector("#hero").getBoundingClientRect();
      return { vtop: Math.round(r.top), vbot: Math.round(r.bottom) };
    });
    samples.push({ scrollY: s, currentTime: +t.toFixed(3), ...p });
  }
  console.log("SCRUB DOWN:", JSON.stringify(samples, null, 1));

  // reverse
  const back = [];
  for (const s of [5000, 3000, 1000, 0]) {
    await scroll(s);
    await new Promise((r) => setTimeout(r, 250));
    const t = await page.evaluate(() => document.querySelector(".hero-video").currentTime);
    back.push({ scrollY: s, currentTime: +t.toFixed(3) });
  }
  console.log("SCRUB UP:", JSON.stringify(back));

  // sticky hold + next section blocked
  await scroll(1200);
  await new Promise((r) => setTimeout(r, 250));
  const hold = await page.evaluate(() => {
    const video = document.querySelector(".hero-video");
    const pin = document.querySelector(".hero-pin");
    const marquee = document.querySelector(".marquee-wrap");
    const pr = pin.getBoundingClientRect();
    const mr = marquee.getBoundingClientRect();
    return {
      pinTopAt1200: Math.round(pr.top),
      marqueeTopFromViewport: Math.round(mr.top - window.innerHeight),
      currentTime: +video.currentTime.toFixed(3),
    };
  });
  console.log("HOLD:", JSON.stringify(hold));

  // video loadeddata / canplay
  const loaded = await page.evaluate(() => {
    const v = document.querySelector(".hero-video");
    return { readyState: v.readyState, seeking: v.seeking };
  });
  console.log("LOADED:", JSON.stringify(loaded));

  const scr = await page.evaluate(() => ({ w: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
  console.log("OVERFLOW:", JSON.stringify(scr));
  console.log("errors:", errors.length ? errors : "none");

  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });