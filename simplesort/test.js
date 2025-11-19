import simpleSort from "./simplesort.js";

let arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];
console.log(`Original array: ${arr}`);

let sortedArr = simpleSort(arr);
console.log(`After simpleSort: ${sortedArr}`);