module.exports = function towelSort(matrix) {
  const result = [];
  if (matrix === undefined) {
    return result;
  }
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      result.push(...matrix[i]);
    } else {
      for (let j = 0; j < matrix[i].length; j += 1) {
        result.push(matrix[i][matrix[i].length - 1 - j]);
      }
    }
  }
  return result;
};
