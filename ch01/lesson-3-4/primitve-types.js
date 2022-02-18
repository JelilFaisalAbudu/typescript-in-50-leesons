// Activate TypeScript check
// @ts-check

/*
NOTE: In this section, we're working with simple types link string number boolean

Using JSdoc to add types to and existing or a new JavaScript file.

This annotation tells TypeScript
 which types to expect: two parameters (params) of type numbers and a return type of number
*/

// JSDoc annotation starts below

/**
 * Adding two numbers. 
 * 
 * @param {number} numberOne
 * @param {number} numberTwo
 * @returns {number} 
 */

const addNumbers = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
}

addNumbers(2, '4'); // Not really a number. TypeScript is complaining

addNumbers(2, 4); // TypeScript is OK with this function call