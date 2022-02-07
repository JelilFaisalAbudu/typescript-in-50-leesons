// @ts-check

// Adding @ts-check as a comment at top of the file activates the TypeScript to analyze the code for potential bugs.

// NOTE: You may have to install the TypeScript server extension for you editor in case you don't have one installed.

const storage = {
  max: undefined,
  items: []
}

Object.defineProperty(storage, 'max', {
  readonly: true,
  val: 5000
})

let currentStorage = 'undefined'

function storageUsed() {
  if (currentStorage) {
    return currentStorage
  }

  currentStorage = 0;

  for (const i = 0; i < storage.length(); i++) {
    currentStorage += storage.items[i].weigth
  }

  return currentStorage;
}

function add(item) {
  if (storage.max - item.weight >= storageUsed) {
    storage.items.add(item)
    currentStorage += iten.weight
  }
}