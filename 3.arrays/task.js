function compareArrays(arr1, arr2) {
  let result;

  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
   // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr
    .filter((item) => item > 0 && item % 3 === 0)
    .map((item) => item * 10); 
  return resultArr; // array
}

