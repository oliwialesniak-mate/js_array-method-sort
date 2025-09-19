/**
 * Implements Array.prototype.sort2
 * Sorts the array in-place and returns this
 * @param {Function} [compareFunction] - optional comparison function
 */
[].__proto__.sort2 = function(compareFunction) {
  // Validate comparator if provided
  if (arguments.length > 0 && typeof compareFunction !== 'function') {
    throw new TypeError('The compareFunction must be a function');
  }

  // Default lexicographic comparator
  const defaultCompare = (a, b) => {
    const strA = String(a);
    const strB = String(b);
    return strA < strB ? -1 : strA > strB ? 1 : 0;
  };

  const compare = compareFunction || defaultCompare;
  const arr = this; // reference to the array

  // Simple in-place bubble sort (can be replaced with any in-place algorithm)
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr; // in-place, return this
};
