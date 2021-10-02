// practice
// 1 配列
const array = ["国語", "数学", "英語"];

array.push("理科", "社会");
console.log(array);
console.log(array.length);

// 2 fizzbuzz
for (let i = 0; i < 50; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
// forは初めの条件から順に当てはまるまで条件を変えて試みる。初めに3,5を設定すると15を見る前に評価終えちゃう。
// ↓
for (let i = 0; i < 50; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 3 while
// let water = 1000;

// while (water > 0) {
//   water = water - 180;
//   console.log("水を飲み干した")
// }

let water = 1000;
const drink = 180;

while (water > 0) {
  console.log(water);
  water = water - drink;
}
console.log("水を飲み干した");