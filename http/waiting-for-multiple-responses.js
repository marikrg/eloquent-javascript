function all(promises) {
  return new Promise(function(succeed, fail) {
    var countDone = 0,
        result = [];

    if(promises.length === 0) {
      succeed(result);
    }
    promises.forEach(function(promise, i) {
      promise.then(
        function(value) {
          countDone++;
          result[i] = value;
          if(countDone === promises.length) {
            succeed(result);
          }
        },
        function(error) {
          fail(error);
        }
     );
    });
  });
}

// Test code.
all([]).then(function(array) {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}, function(error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
});
