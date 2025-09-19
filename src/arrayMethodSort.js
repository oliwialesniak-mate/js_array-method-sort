/**
 * Custom implementation of Array.prototype.sort using sort2
 * @param {Array} arr - the array to sort
 * @param {Function} [compareFn] - optional comparison function
 * @returns {Array} - sorted array
 */
function sortCustom(arr, compareFn) {
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument must be an array');
  }

  // Default comparison: lexicographic order as strings
  const defaultCompare = (a, b) => {
    const strA = String(a);
    const strB = String(b);
    return strA < strB ? -1 : strA > strB ? 1 : 0;
  };

  const compare = typeof compareFn === 'function' ? compareFn : defaultCompare;

  // Use the provided sort2 method on the array
  return [].__proto__.sort2.call(arr, compare);
}

module.exports = applyCustomers;
