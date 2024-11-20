/**
 * 
 * Task -2:
Find the friend with the smallest name.
const friends = ['raheem', 'robin', 'rafi', 'ron', 'rashed'];


 */


// Solution:
const friends = ['raheem', 'robin', 'rafi', 'ron', 'rashed'];

let smallestName = friends[0];

for (element of friends) {
    if (element.length < smallestName.length) {
        smallestName = element;
    }
}
console.log(smallestName);

