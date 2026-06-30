const { chromium } = require('playwright');
const fs = require('fs');

async function renderFigure(htmlFile, outputFile) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const filePath = `file://${process.cwd()}/${htmlFile}`;
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  
  // Get the body's bounding box
  const bodyBox = await page.evaluate(() => {
    const body = document.body;
    const rect = body.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  });
  
  await page.setViewportSize({ 
    width: Math.ceil(bodyBox.width), 
    height: Math.ceil(bodyBox.height) 
  });
  
  await page.waitForTimeout(300);
  await page.screenshot({ path: outputFile, fullPage: true, type: 'png' });
  await browser.close();
  console.log(`Rendered: ${outputFile}`);
}

async function main() {
  const figures = [
    ['fpf-004-pillars.html', 'fpf-004-pillars.png'],
    ['fpf-001-gradient.html', 'fpf-001-gradient.png'],
    ['fpf-002-hierarchy.html', 'fpf-002-hierarchy.png'],
    ['fpf-comparative-matrix.html', 'fpf-comparative-matrix.png'],
    ['fpf-cei-architecture.html', 'fpf-cei-architecture.png'],
  ];
  
  for (const [html, png] of figures) {
    if (fs.existsSync(html)) {
      await renderFigure(html, png);
    }
  }
}

main().catch(console.error);
