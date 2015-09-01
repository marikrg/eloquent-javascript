var arrays = [[1, 2, 3], [4, 5], [6]];

function flat(array, current) {
  return array.concat(current);
}

console.log(arrays.reduce(flat, []));
