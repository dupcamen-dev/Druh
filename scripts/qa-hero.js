const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu", "--window-size=1440,900"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2500));
  await page.screenshot({ path: "tmp-hero-desktop.png", fullPage: false });

  const canvasCount = await page.$$eval("canvas", (els) => els.length);
  console.log("Canvas elements:", canvasCount);

  const heroText = await page.$eval("#hero h1", (el) => el.textContent);
  console.log("Hero h1 text:", heroText);

  // scroll past hero
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 0.85));
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: "tmp-hero-scrolled-desktop.png", fullPage: false });

  // to next section
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.6));
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: "tmp-after-hero-desktop.png", fullPage: false });

  // mobile
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2500));
  await page.screenshot({ path: "tmp-hero-mobile.png", fullPage: false });

  console.log("Console errors:", errors.length ? errors : "NONE");
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
