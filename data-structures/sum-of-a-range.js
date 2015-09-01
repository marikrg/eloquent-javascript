function range(start, end, step) {
  step = step || 1;
  var array;

  if (step == 0) {
    console.log('invalid step');
  } else if(step > 0) {
    array = createCrescentRange(start, end, step);
  } else if(step < 0) {
    array = createDescendingRange(start, end, step);
  }
  return array;
}

function createCrescentRange(start, end, step) {
  var array = [];
  for (i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}

function createDescendingRange(start, end, step) {
  var array = [];
  for (i = start; i >= end; i += step) {
    array.push(i);
  }
  return array;
}

function sum(numbers) {
  var total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
