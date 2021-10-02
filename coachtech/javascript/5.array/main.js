const array1 = ["太郎", "次郎", "三郎", "四郎", "五郎"];

array1.forEach(function (item, index) {
  if (item == "三郎") {
    console.log(`${item}は${index}番目の要素です`);
  }
})


const array2 = [8, 10, 5, 3, 2];

const result = array2.filter(function (item) {
  return item % 2 === 1;
});

console.log(result);

// practice
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result3 = array3.map(function (item) {
  if (item % 2 === 0) {
    return item * 2;
  }
  return item;
});

console.log(result3);

function text(number1, number2) {
  const value = number1 + number2;
  return value;
}
console.log(text(2, 4));



// スコープ
const globalConst = 'globalConst';
let globalLet = 'globalLet';

function dummyFunc() {
  const localConst = 'localConst';
  let loalLet = 'localLet';
}

dummyFunc();

console.log(globalConst);
console.log(globalLet);

globalLet = 'updateGlobalLet';
console.log(globalLet);

// console.log(localConst);
// console.log(localLet);

// how they work
const items = [
  {
    name: "水",
    price: 100,
  },
  {
    name: "リンゴジュース",
    price: 130,
  },
  {
    name: "コーヒー",
    price: 150,
  },
  {
    name: "モンスター",
    price: 200,
  },
  {
    name: "レッドブル(大)",
    price: 250,
  },
];

const buy = function (pay, itemName) {
  const findItem = items.find((i) => i.name == itemName);
  if (!findItem) return console.log("その商品は存在しません。");
  if (pay < findItem.price) return console.log("お金が足りません。");
  const change = pay - findItem.price;
  console.log(findItem.name + "をお買い上げありがとうございます。");
  if (change >= 0) {
    return console.log("お釣りはありません。");
  }
  console.log("お釣りは" + change + "円になります。");
}

buy(100, '水');
buy(200, 'リンゴジュース');
buy(30, 'コーヒー');
buy(130, 'オレンジジュース');


// practice

const items2 = [
  {
    name: "A",
    score: 80,
  },
  {
    name: "B",
    score: 15,
  },
  {
    name: "C",
    score: 55,
  },
];

const result5 = (one, two) => {
  const findItem2 = items2.find((i) => i.name == itemName);
  if (score < 30) {
    console.log(name + "君もう少し頑張りましょう");
  } else if (price > 70) {
    console.log(name * "君良くできました");
  } else {
    console.log(name + "君普通です");
  }
}

function advice(name, test) {
  if (test >= 70 && test <= 100) {
    return `${name}君良くできました`;
  } else if (test >= 30 && test < 70) {
    return `${name}君普通です`;
  } else if (test >= 0 && test < 30) {
    return `${name}君もう少し頑張りましょう`;
  } else {
    return `正しい数字を入力してください`;
  }
}
console.log(advice("A", 80));
console.log(advice("B", 15));
console.log(advice("C", 50));