function average(array) {
  if (array.length === 0) {
    return undefined;
  }

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    sum += array[i];
  }

  return Math.round(sum / array.length);
}

module.exports = average;
