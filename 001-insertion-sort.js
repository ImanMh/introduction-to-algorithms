// page 18
const insertionSort = (arr) => {
  for(let i = 1; i < arr.length; i += 1) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

const insertionSortReverse = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

module.exports = {
  insertionSort,
  insertionSortReverse
};


// Sample runner:
// const sort = require('./001-insertion-sort');
//
// const a = [5, 3, 2, 4, 1];
// sort.insertionSort(a);
// console.log(a);
// sort.insertionSortReverse(a);
// console.log(a);
