Array.prototype.sortCustom = function(compareFn) {
  const defaultCompare = (a, b) => {
    const strA = String(a);
    const strB = String(b);
    return strA < strB ? -1 : strA > strB ? 1 : 0;
  };

  const compare = typeof compareFn === 'function' ? compareFn : defaultCompare;

  // Wywołanie sort2 w kontekście bieżącej tablicy
  return [].__proto__.sort2.call(this, compare);
};

module.exports = applyCustomSort;
