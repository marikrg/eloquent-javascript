function logFive(iterator) {
  for (i = 0; i < 5; i++) {
    if (iterator.hasNext()) {
      console.log(iterator.next());
    }
  }
}

function ArrayIterator(array) {
  this.currentPosition = 0;
  this.array = array;
}

ArrayIterator.prototype.hasNext = function() {
  return this.currentPosition < this.array.length;
}

ArrayIterator.prototype.next = function() {
  return this.array[this.currentPosition++];
}

function RangeIterator(from, to) {
  this.currentPosition = from;
  this.to = to;
}

RangeIterator.prototype.hasNext = function() {
  return(this.currentPosition < this.to);
}

RangeIterator.prototype.next = function() {
  return this.currentPosition++;
};

logFive(new ArrayIterator([1, 2]));
// → 1
// → 2
logFive(new RangeIterator(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
