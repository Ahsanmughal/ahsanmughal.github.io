const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.setViewport({width:1440, height: 900, deviceScaleFactor: 2});
    await page.goto("file:///D:/temp/html-to-pdf/index.html", { waitUntil: "networkidle2"});
    await page.pdf({
        path: "resume.pdf",
        format: "A4",
    });

    await browser.close();
})();