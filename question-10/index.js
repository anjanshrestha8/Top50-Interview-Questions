let array = [1, 2, 3, 4, 5, 6];
let sum = 0;

function sumOfArray(data) {
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}
console.log(sumOfArray(array));
