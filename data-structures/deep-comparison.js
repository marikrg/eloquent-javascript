function deepEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    if (bothAreObject(a, b) && haveSameKeysLength(a, b)) {
      for (propName in a) {
        return (deepEqual(a[propName],b[propName]));
      }
    } else {
      return false;
    }
  }
}

function bothAreObject(a, b) {
  var areObject = false;
  if (typeof a == 'object' && typeof b == 'object') {
    if (a != null && b != null) {
      areObject = true;
    }
  }
  return areObject;
}

function haveSameKeysLength(a, b) {
  return Object.keys(a).length === Object.keys(b).length;
}
