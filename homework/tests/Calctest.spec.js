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
const firstNumberInputField='input[name=number1]';
const secondNumberInputField='input[name=number2]';

async function addNumbersinVersion (page, version, numberOne, numberTwo){
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', { label: version});
  await page.locator(firstNumberInputField).type(numberOne);
  await page.locator(secondNumberInputField).type(numberTwo);
  await page.selectOption('#selectOperationDropdown', {label: 'Add'});
  
}




data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Add 2 and 2 results in 4', async ({ page }) => {
      await addNumbersinVersion(page, version, '2','2');
      for(let i=0; i<3; i++) {//for loop to see if any version of calculator gives different result when execution repeats
      await page.locator('#calculateButton').click();
      await expect(page.locator('input[name=numberAnswer]')).toHaveValue('4');
    }
  });
});
});




data.forEach(version => {
  test.describe(version, () => {
    test('Add 3.44 and 1.33 results in 4.77', async ({ page }) => {
      await addNumbersinVersion(page, version, '3.44','1.33');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('input[name=numberAnswer]')).toHaveValue('4.77');
    });
  });
});

data.forEach(version => {
  test.describe(version, () => {
    test('Select Integers only and add 3.44 and 1.33 results in 4', async ({ page }) => {
      await addNumbersinVersion(page, version, '3.44','1.33');
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('input[name=numberAnswer]')).toHaveValue('4');
    });
  });
});

data.forEach(version => {
  test.describe(version, () => {
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator(firstNumberInputField).type('2');
      await page.locator(secondNumberInputField).type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('nput[name=numberAnswer]')).toHaveValue('23');
    });
  });
});

data.forEach(version => {
    test.describe(version, () => {
      test('First number input field is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
       
        await expect(page.locator( firstNumberInputField)).toBeVisible();
        
      });
    });
  });

  data.forEach(version => {
    test.describe(version, () => {
      test('Second number input field is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
     
        await expect(page.locator(secondNumberInputField)).toBeVisible();
      });
    });
  });

  data.forEach(version => {
    test.describe(version, () => {
      test('Subtract 2 from 20 results in 18', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator( firstNumberInputField).type('20');
        await page.locator(secondNumberInputField).type('2');
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
        await page.locator( firstNumberInputField).type('3');
        await page.locator(secondNumberInputField).type('3');
        await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('nput[name=numberAnswer]')).toHaveValue('9');
      });
    });
  });

  data.forEach(version => {
    test.describe(version, () => {
      test('Divide 9 and 3 results in 3', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator( firstNumberInputField).type('9');
        await page.locator(secondNumberInputField).type('3');
        await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('nput[name=numberAnswer]')).toHaveValue('3');
      });
    });
  });

  data.forEach(version => {
    test.describe(version, () => {
      test('Typing text in a first number input field instead of numbers results in " "' , async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator( firstNumberInputField).type('Text');
       
    
        await expect(page.locator( firstNumberInputField)).toHaveValue(' ');
      });
    });
  });

  data.forEach(version => {
    test.describe(version, () => {
      test('Typing text in a second number input field instead of numbers results in " "' , async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator(secondNumberInputField).type('Text');
       
    
        await expect(page.locator(secondNumberInputField)).toHaveValue(' ');
      });
    });
  });

