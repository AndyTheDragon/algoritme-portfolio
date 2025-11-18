import isSorted from "./issorted.js";

console.log(`Array [1, 2, 3, 4, 5, 6, 7, 8, 9] is sorted: ${isSorted([1, 2, 3, 4, 5, 6, 7, 8, 9])}`); // true
console.log(`Array [1, 2, 4, 5, 7, 9, 11] is sorted: ${isSorted([1, 2, 4, 5, 7, 9, 11])}`); // true
console.log(`Array [2, 2, 3, 6, 8, 9, 9, 10, 10, 11, 12] is sorted: ${isSorted([2, 2, 3, 6, 8, 9, 9, 10, 10, 11, 12])}`); // true
console.log(`Array [9, 8, 7, 6, 5, 4, 3, 2, 1] is sorted: ${isSorted([9, 8, 7, 6, 5, 4, 3, 2, 1])}`); // false
console.log(`Array [1, 8, 9, 4, 6, 7, 2, 5, 3] is sorted: ${isSorted([1, 8, 9, 4, 6, 7, 2, 5, 3])}`); // false
console.log(`Array [1, 2, 4, 4, 5, 3, 6, 7, 8] is sorted: ${isSorted([1, 2, 4, 4, 5, 3, 6, 7, 8])}`); // false
console.log(`Array [4, 4, 4, 4, 4, 4, 4] is sorted: ${isSorted([4, 4, 4, 4, 4, 4, 4])}`); // true