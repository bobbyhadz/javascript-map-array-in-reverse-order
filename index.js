// EXAMPLE 1 - Use map() on an Array in Reverse Order in JavaScript

const arr = ['a', 'b', 'c'];

const mapReverse1 = arr
  .slice(0)
  .reverse()
  .map(element => {
    return element;
  });

console.log(mapReverse1); // 👉️ ['c', 'b', 'a']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Use map() on an Array in Reverse Order using spread syntax (...)

// const arr = ['a', 'b', 'c'];

// const mapReverse2 = [...arr].reverse().map(element => {
//   return element;
// });

// console.log(mapReverse2); // 👉️ ['c', 'b', 'a']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Use map() on an Array in Reverse Order using the current index

// const arr = ['a', 'b', 'c'];

// const mapReverse = arr.map((_element, index) => {
//   return arr[arr.length - 1 - index];
// });

// console.log(mapReverse); // 👉️ ['c', 'b', 'a']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Use map() on an Array in Reverse Order by reversing after

// const arr = ['a', 'b', 'c'];

// const mapReverse = arr
//   .map(element => {
//     return element;
//   })
//   .reverse();

// console.log(mapReverse); // 👉️ [ 'c', 'b', 'a' ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Use map() on an Array in Reverse Order by using `reduceRight`

// const arr = ['a', 'b', 'c'];

// const result = arr.reduceRight((accumulator, last) => {
//   return accumulator.concat(last);
// }, []);

// console.log(result); // 👉️ [ 'c', 'b', 'a' ]
