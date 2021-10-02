const max = (x, y) => { //関数のルール
  if (x < y) {
    return y;
  }
  return x;
}

console.log(max(5, 2));

// const age = 26;

// const x = (age) => {
//   if (age < 3) {
//     console.log('赤ちゃん');
//   } else if (age < 18) {
//     console.log('子供');
//   } else if (age > 65) {
//     console.log('大人');
//   } else {
//     console.log('お年寄り');
//   }
// }

// いちいちconsole.logさせるんじゃなくて、値を返す。最後にその結果のみ値を受け取る

// const result = x(26);
// console.log(result);

const x = (age) => {
  if (age < 3) {
    return '赤ちゃん';
  } else if (age < 18) {
    return '子供';
  } else if (age < 65) {
    return '大人';
  } else {
    return 'お年寄り';
  }
}

const result = x(26);
console.log(result);

// fizzbuzz
const a = (figure) => {
  if (figure % 15 === 0) {
    return 'fizzbuzz';
  } else if (figure % 3 === 0) {
    return 'fizz';
  } else if (figure % 5 === 0) {
    return 'buzz';
  } else {
    return figure;
  }
}

for (let figure = 1; figure <= 50; figure++) {
  console.log(a(figure));
}