let number = 7;
let result;
function multiplication(number, multi) {
  return number * multi;
}
for (let i = 1; i <= 10; i++) {
  result = multiplication(number, i);
  console.log(`${number} * ${i} = ${result}`);
}
