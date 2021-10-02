// while (boolean型の値) {
//   // 
// }

let x = 0;

while (x < 10) {
  console.log(`現在のあたいは${x}です。`);
  x++;
}

for (let x = 0; x < 10; x++) {
  console.log(`現在のあたいは${x}です。`);
}

for (let x = 1; x < 10; x++) {
  let row = "|";
  for (let y = 1; y < 10; y++) {
    // console.log(`${x * y}`);
    row += `${x * y}|`;
    // row = row + `${x + y}`; と同じ意味
  }
  console.log(row);
}

// fizzbuzz
for (let x = 0; x <= 50; x++) {
  if (x % 15 === 0) {
    console.log("fizzbuzz");
  } else if (x % 3 === 0) {
    console.log("fizz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(x);
  }
}