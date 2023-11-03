// function BinarySearch(arr, value, result = []) {
//   // Tu código aquí
// }

function BinarySearch(arr, value, result = []) {
  if (arr.length === 0) {
    return "Value not found";
  }

  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr[middleIndex];

  if (middleValue === value) {
    result.push(middleValue);
    return result;
  }

  if (value < middleValue) {
    const leftArray = arr.slice(0, middleIndex);
    return BinarySearch(leftArray, value, [...result, middleValue]);
  } else {
    const rightArray = arr.slice(middleIndex + 1);
    return BinarySearch(rightArray, value, [...result, middleValue]);
  }
}

module.exports = BinarySearch;
