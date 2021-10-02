{
  let x = 'ブロックスコープの中';
  console.log(x);
  {
    let x = 'ブロックスコープの中の中';
    console.log(x);
  }
}
let x = 'ブロックスコープ';
console.log(x);

const condition = false;

if (condition) {
  // console.log('条件はtrueです。');
  const x = 100;
  const y = 0.5 * x ** 2;
}
console.log('出力します。');

// 直接代入する
const okanemochi = true;
const ikemen = true;

if (okanemochi && ikemen) {
  console.log("好みのタイプ");
} else if (okanemochi || ikemen) {
  console.log('キープ');
} else {
  console.log('アウトオブ眼中');
}

// 一旦定数にするか

const soushisan = 10000000;
const ganmenhensachi = 75;

const isRich = soushisan > 10000000;
const isHandsome = ganmenhensachi >= 65;

if (isRich && isHandsome) {
  console.log('好みのタイプ');
} else {
  console.log('アウトオブ眼中');
}

// if (soushisan > 10000000 && ganmenhensachi >= 65) {
//   console.log("好みのタイプ");
// } else {
//   console.log('アウトオブ眼中');
// }