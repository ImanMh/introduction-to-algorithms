const linearSearch = (arr, key) => {
  let index = null;
  for( let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      index = i;
      break;
    }
  }
  return index;
};

module.exports = linearSearch;

// Sample runner:
// const search = require('./002-linear-search');
// const a = [5, 3, 2, 4, 1];
// const index = search(a, 2);
// console.log(index);