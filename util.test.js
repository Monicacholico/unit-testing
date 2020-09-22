const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
})

test('should generate a valid text ouput', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)');
<<<<<<< HEAD
})

test('should create an element with text and correct class', async () => {
    const browser =  await puppeteer.launch({
        headless: false,
        // slowMo: 90,
        // args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
        'file:///Users/molo/Vscode/testing-01-starting-setup/index.html'
    );

    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '34');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (34 years old)');
},10000);
=======

})
>>>>>>> c02c81d0462feed1f4a56186b448fb4bf166c7c3
