const { test, expect } = require("@playwright/test");
const { SearchPage } = require('../pages/SearchPage');
const { SearchResultsPage } = require("../pages/SearchResultsPage");


test.describe('Search', () => {
  test('First result should contain devbridge.com', async ({ page }) => {
    let searchPage = new SearchPage(page);
    await searchPage.navigate();
    await searchPage.search('devbridge');

    let searchResultsPage=new SearchResultsPage(page);
    let text = await searchPageResultsPage.getMainHreffAttributeFromResult(1);

    expect(text).toContain('devbridge.com');
  });
  test('Fourth result should contain linkedin.com', async ({ page }) => {

    let searchPage = new SearchPage(page);
    await searchPage.navigate();
    await searchPage.search('devbridge');

    let searchResultsPage = new SearchResultsPage(page);
    let text = await searchResultsPage.getMainLinkAttributeFromResult(4);

    expect(text).toContain('linkedin.com');
    
    // await page.goto('https://duckduckgo.com/');
    // await page.locator('input[name=q]').fill('devbridge');
    // await page.locator('input[name=q]').press('Enter');

    // let text= await page.locator('#r1-3 h2 a').getAttribute('href');
});
test('Search query should be auto - populated in Results page', async ({ page }) => {

  let searchPage = new SearchPage(page);
  await searchPage.navigate();
  await searchPage.search('devbridge');

  let searchResultsPage = new SearchResultsPage(page);
  let text = await searchResultsPage.getQueryInputText();
  

  expect(text).toEqual('devbridge');
  
});
});
