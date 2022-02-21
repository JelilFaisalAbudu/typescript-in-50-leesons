// Activate type-checker
// @ts-check

// Import and use the type declarations in the JSDoc

/**
 * @typedef { import('./types.d').Lesson5StorageItem  } Lesson5StorageItem 
 */
/**
 * @typedef { import('./types.d').Lesson5ShipStorage } Lesson5ShipStorage
 */

// Attach Lesson5ShipStorage to lesson5Storage object
/**
 * @type {Lesson5ShipStorage}
 */
const lesson5Storage = {
  max: undefined,
  items: [],
}
/**
 * @type {number}
 */
let lesson5currentStorage = undefined;

function lesson5StorageUsed() {
  if (lesson5currentStorage) {
    return lesson5currentStorage;
  }

  lesson5currentStorage = 0;

  for (let i = 0; i < storage.max; i++) {
    lesson5currentStorage += storage.items[i].weight
  }

  return lesson5currentStorage;
}

/**
 * @param {Lesson5StorageItem} item
 */

const lesson5Add = item => {

  const { max } = storage;
  const { weight } = item;
  if(max - weight >= lesson5StorageUsed()) {
    storage.items.push();
    lesson5currentStorage += weight;
  }
}