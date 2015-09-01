function arrayToList(array) {
  var list = null;
  for (i = array.length-1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  var array = [],
      object = list;
  do {
    array.push(object.value);
    object = object.rest;
  } while(object != null);

  return array;
}

function prepend(value, list) {
  object = object || null;
  var thisObject = {
      value: value,
      rest: object
    };
  return thisObject;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
