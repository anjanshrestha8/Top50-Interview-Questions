let result;
function multiplication(number, multi) {
  return number * multi;
}
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result = multiplication(i, j);

    console.log(`${i} * ${j} = ${result}`);
  }
}
