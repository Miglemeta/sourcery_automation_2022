// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

 for(let i=0; i<3; i++) {
  test.describe('runing test ' + i, () => {
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('nput[name=numberAnswer]')).toHaveValue('23');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Add 2 and 2 results in 4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('input[name=number1]').type('2');
      await page.locator('input[name=number2]').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('input[name=numberAnswer]')).toHaveValue('4');
    });
  });
});

data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('First number input field is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
       
        await expect(page.locator('input[name=number1]')).toBeVisible();
        
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('Second number input field is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
     
        await expect(page.locator('input[name=number2]')).toBeVisible();
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('Subtract 2 from 20 results in 18', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('input[name=number1]').type('20');
        await page.locator('input[name=number2]').type('2');
        await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('nput[name=numberAnswer]')).toHaveValue('18');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('Multiply 3 and 3 results in 9', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('input[name=number1]').type('3');
        await page.locator('input[name=number2]').type('3');
        await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('nput[name=numberAnswer]')).toHaveValue('9');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('Divide 9 and 3 results in 3', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('input[name=number1]').type('9');
        await page.locator('input[name=number2]').type('3');
        await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('nput[name=numberAnswer]')).toHaveValue('3');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('Typing text in a first number input field instead of numbers results in " "' , async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('input[name=number1]').type('Text');
       
    
        await expect(page.locator('input[name=number1]')).toHaveValue(' ');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('Typing text in a second number input field instead of numbers results in " "' , async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('input[name=number2]').type('Text');
       
    
        await expect(page.locator('input[name=number2]')).toHaveValue(' ');
      });
    });
  });

data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('Add 3.44 and 1.33 results in 4.77', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('input[name=number1]').type('3.44');
        await page.locator('input[name=number2]').type('1.33');
        await page.selectOption('#selectOperationDropdown', {label: 'Add'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('input[name=numberAnswer]')).toHaveValue('4.77');
      });
    });
  });
});
};