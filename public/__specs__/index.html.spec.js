const server = require('../../index'); // Brings up the server until the test suite stops
const puppeteer = require('puppeteer');

describe('index.html', () => {
  let titleText;

  beforeAll(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--lang=cs-CZ,cs'],
      timeout: 60000,
    });
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 1024 });

    await page.goto('http://localhost:4040/');

    await page.waitForSelector('#title');

    titleText = await page.evaluate(() => {
      const title = document.getElementById('title');

      return title.innerText;
    });

    await browser.close();
  });

  it('should render the title text', () => {
    expect(titleText).toEqual('Hey Faris');
  });
});
