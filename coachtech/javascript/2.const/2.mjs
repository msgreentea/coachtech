let say = "Hello";
console.log(say);
say = "Goodbye";
console.log(say);

const a = 3;
const b = -2;
console.log(a > 0 && b > 0);

//  第4章

// if
const price = 1800;

if (price < 1000) {
  console.log("安い");
} else if (price > 2000) {
  console.log("高い");
} else {
  console.log("ちょうどいい");
}

const quantity = 400;
const banana = (quantity <= 300) ? "少ない" : "多い";
console.log(banana);


// switch
const person = 3;

switch (person) {
  case 1:
    console.log("太郎さん");
    break;
  case 2:
    console.log("次郎さん");
    break;
  case 3:
    console.log("三郎さん");
    break;
  case 4:
    console.log("四郎さん");
    break;
  case 5:
    console.log("五郎さん");
    break;
}

// practice
// 1
const value = 1000;
const tax = 0.1;
console.log(value * tax);

// 2
const A = 80 + 90 + 60 + 85 + 100;
console.log(A);
const B = 40 + 30 + 50 + 25 + 60;
console.log(B);

if (A <= 300 && B <= 300) {
  console.log("素晴らしい");
} else if (A<= 300 || B <= 300) {
  console.log("普通");
} else {
  console.log("頑張ろう");
}

// 3
const luck = "大吉";

switch (luck) {
  case"大吉":
    console.log("大吉です！");
    break;
  case 2:
    console.log("中吉です！");
    break;
  case 3:
    console.log("小吉です！");
    break;
  case 4:
    console.log("吉です！");
    break;
  case 5:
    console.log("末吉です！");
    break;
  case 6:
    console.log("凶です！");
    break;
  case 7:
    console.log("大凶です！");
    break;
}

// 4
const figure = 1800;

// const result = (figure < 2000 && figure > 2000) ? "安い" : "高い";
const result = (figure < 1000) ? "安い" : (figure > 2000) ? "高い" : "ちょうどいい";
console.log(result);