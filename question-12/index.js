let array = [1, -2, 3, -4, 5, 6];
let result = [];
let sum = 0;

function checkIfPositive(data) {
  for (let i = 0; i <= data.length; i++) {
    if (data[i] > 0) {
      result.push(data[i]);
    }
  }
  return result;
}

console.log(checkIfPositive(array));
