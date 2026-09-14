const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2000));

  const res = await page.evaluate(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return { missing: true };
    return {
      svgCount: hero.querySelectorAll("svg").length,
      canvasCount: hero.querySelectorAll("canvas").length,
      heroNoteCount: hero.querySelectorAll(".hero-note").length,
      heroStamp: !!hero.querySelector(".hero-stamp"),
      heroScroll: !!hero.querySelector(".hero-scroll"),
      dashRing: !!hero.querySelector(".hero-dash-ring"),
      vignette: !!hero.querySelector(".hero-vignette"),
      grain: !!hero.querySelector(".hero-grain"),
      text: hero.innerText.split("\n").filter(Boolean).slice(0, 12),
      bg: getComputedStyle(hero).backgroundImage,
    };
  });
  console.log(JSON.stringify(res, null, 2));
  console.log("errors:", errors.length ? errors : "none");
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });