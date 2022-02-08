// @ts-check

const storage = {
  max: undefined,
  items: []
}

Object.defineProperty(storage, 'max', {
  // Type-check error:
  // JS' property descriptors don't know of the properties called "readonly" and "val". Comment them out and fix it
  // readonly: true,
  // val: 5000,

  writable: false,
  value: 5000,
});

// Type-inference error.
// Cannot assign a number type to a string type in the storageUsedFixed() function. Comment it out and assign the programmatic undefined to the variable instead of the string 'undefined'
// let currentStorage = 'undefined';
let currentStorage = undefined;

function storageUsedFixed() { // Postfixed this with Fixed to avoid TypeScript's warning of function overload.

  if (currentStorage) {
    return currentStorage;
  }

  
  currentStorage = 0;

  // Cannot reassign a constant variable i. Change the const keyword to let instead
  for (let i = 0; i < storage.length(); i++) {
    currentStorage += storage.items[i].weigth
  }

  return currentStorage;
}

function add(item) {
  // Comparing a number with a function instead of its return value. Calling the function with the double bracket fixes the problem. 
  if (storage.max - item.weight >= storageUsedFixed()) {
    // items of type array doesn't know of add as its valid property. Change it to push instead
    // storage.items.add(item);
    storage.items.push(item);
    // Typo error.
    // It's item instead of iten

    // currentStorage += iten.weight
    currentStorage += item.weight

  }
}