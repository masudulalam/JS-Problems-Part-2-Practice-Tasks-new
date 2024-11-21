/**
 * 
 * 
 * Task-3:
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk


Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

 */



// Solution:
function calculateElectronicsBudget (numOfLaptop, numOfTablet, numOfMobile) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const totalMoney = laptop * numOfLaptop + tablet * numOfTablet + mobile * numOfMobile;

    return totalMoney;
}

const output= calculateElectronicsBudget(3, 1, 3);
console.log(output);
