// CommonJS синтаксис, т.к. package.json без "type":"module"
const { test, expect } = require('@playwright/test');

test('Greet button with name', async ({ page }) => {
    await page.goto('/index.html');
    await page.fill('#name', 'Alice');
    await page.click('#greetBtn');
    await expect(page.locator('#greeting')).toHaveText('Hello, Alice!');
});

test('Greet button without name', async ({ page }) => {
    await page.goto('/index.html');
    await page.click('#greetBtn');

    await expect(page.locator('#greeting')).toHaveText('Hello, Guest!');
});