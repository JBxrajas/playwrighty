import { test, expect } from '@playwright/test';


test('Test Mercadolibre Search', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');
  await page.locator('//input[@id="cb1-edit"]').fill('Iphone X')
  await page.keyboard.press('Enter')
  await expect(page.locator('//ol[contains(@class ,\'ui-search-layout\')]')).toBeVisible()
  const elements = await page.locator('//ol[contains(@class ,\'ui-search-layout\')]//li//h2').allInnerTexts()
  
  console.log('The search result count', elements.length)
  
  for (let element of elements){
    console.log('this is the element ',element)
  }


});

test('Test Dynamic ID buttons', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com')
  await page.getByRole('link', {name:'Dynamic ID'}).click()
  await page.getByRole('button',{name:'Button with Dynamic ID'}).focus()
  await page.pause()


});

