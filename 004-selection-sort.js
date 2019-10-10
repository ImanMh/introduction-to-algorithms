const selectionSort = (arr) => {
  const cloneArray = [...arr];
  for (let i = 0; i < cloneArray.length - 1; i += 1) {
    let indexOfMin = null;
    let minValue = Infinity;

    for (let j = i + 1; j < cloneArray.length; j += 1) {
      // console.log('min value >= cloneArray[j]');
      // console.log(minValue, cloneArray[j]);
      if (cloneArray[j] < minValue) {
        indexOfMin = j;
        minValue = cloneArray[j];
      }
    }
    // console.log('index of min: ', indexOfMin);
    // console.log('min in: ', cloneArray.slice(i + 1), ' is ', cloneArray[indexOfMin]);

    if (indexOfMin !== null) {
      let swap = cloneArray[i];
      cloneArray[i] = cloneArray[indexOfMin];
      cloneArray[indexOfMin] = swap;
    }

    // console.log('after swap:', cloneArray);
  }

  return cloneArray;
};

const arr = [4, 2, 7, 8, 9, 1, 2, 3, 5, 6, 0];
const sorted = selectionSort(arr);
console.log(sorted);
