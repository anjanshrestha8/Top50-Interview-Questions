let array = [1, 2, 3, 4, 5, 6];
let sum = 0;

function findTotalSum(data) {
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function average(data) {
  let result = findTotalSum(data);
  return result / data.length;
}

console.log(average(array));
