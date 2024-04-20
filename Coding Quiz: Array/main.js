/**
 * TODO:
 * Create a variable named evenNumber which is an array with the following conditions:
 * - The array holds even numbers from 1 to 100
 *
 * Notes:
 * - To make it easier, use a for loop and if logic to fill the even number in the array.
 */
// Write the code below
let evenNumber = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  }
}
// Testing with console.log()
console.log("Even numbers from 1 to 100:");
console.log(evenNumber);
