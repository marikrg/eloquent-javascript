function reverseArray(array) {
  var reversedArray = [];
  for (i = array.length-1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  var countDown = array.length,
      halfLengthRoundedDownward = Math.floor(array.length / 2);

  for (countUp = 0; countUp < halfLengthRoundedDownward; countUp++) {
    countDown--;
    valueFromCountUpIndex = array[countUp];
    array[countUp] = array[countDown];
    array[countDown] = valueFromCountUpIndex;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
