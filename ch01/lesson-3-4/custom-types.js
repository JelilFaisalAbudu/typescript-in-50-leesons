// Activate TypeScript
// @ts-check

// Define custom types and its properties
// Begin JSDoc
/**
 * @typedef {Object} StorageItem
 * @property {number} weight
 */

/**
 * @typedef {Object} ShipStorage
 * @property {number} max
 * @property {StorageItem[]} items
 */

/** @type {ShipStorage} */
const storage = {
  max: undefined,
  items: []
}

/**
 * @param {StorageItem} item
 * 
 */

const add = item => {

  const { max } = storage;
  const { weight } = item;
  if(max - weight >= storageUsed()) {
    storage.items.push();
    currentStorage += weight;
  }
}

Object.defineProperty(storage, 'max', {
  writable: false,
  value: 5000
})

let currentStorage = undefined;

function storageUsed() {
  if (currentStorage) {
    return currentStorage
  }

  currentStorage = 0;

  for (let i = 0; i < storage.max; i++) {
    currentStorage += storage.items[i].weight
  }

  return currentStorage;
}