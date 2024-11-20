/**
 * 
 * 
 * Task -1:
    Find the lowest number in the array below.
    const heights2 = [167, 190, 120, 165, 137];

 */


// Solution:
const heights2 = [167, 190, 120, 165, 137];

let lowestNumber = heights2[0];
for (const element of heights2) {
    if (element < lowestNumber) {
        lowestNumber = element;
    }
}
console.log(lowestNumber);