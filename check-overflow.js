const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 823, isMobile: true });
  await page.goto('http://localhost:3000');
  
  // Wait for a bit
  await new Promise(r => setTimeout(r, 2000));
  
  const result = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const bodyWidth = document.body.scrollWidth;
    const innerWidth = window.innerWidth;
    
    const overflowing = Array.from(document.querySelectorAll('*'))
      .filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.right > innerWidth && rect.width > 0;
      })
      .map(el => ({
        tag: el.tagName,
        className: el.className,
        right: el.getBoundingClientRect().right,
        width: el.getBoundingClientRect().width,
        html: el.outerHTML.substring(0, 100)
      }))
      .sort((a, b) => b.right - a.right)
      .slice(0, 10);
      
    return { docWidth, bodyWidth, innerWidth, overflowing };
  });
  
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
