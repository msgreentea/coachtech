const downtown = {
  name: 'ダウンタウン',
  boke: '松本人志',
  tsukkomi: '浜田雅功',
  method () {
    console.log(this);
  }
}
console.log(downtown.name);

const propName = 'boke';
console.log(downtown[propName]);

console.log(downtown);

downtown.name = 'ライト兄弟';
console.log(downtown);

downtown.manager = '藤原寛';
console.log(downtown);


downtown.name = 'ダウンタウン'

const chidori = {
  name: '千鳥',
  boke: '大吾',
  tsukkomi: 'ノブ',
  // ここの中に関数を入れる事が出来るけど、アロー関数は使えない。
  // manzai(arg) {
  //   return '爆笑'; //省略した書き方は出来る
  // }
  method () {
    console.log(this);
  }
}



const introduction = (combi) => {
  console.log(`コンビ名は${combi.name}です。ボケは${combi.boke}、ツッコミは${combi.tsukkomi}です。`);
}

introduction(downtown);
introduction(chidori);


downtown.method();
chidori.method();


// practice 関数をメソッドに書き換える
const downtown2 = {
  name: 'ダウンタウン',
  boke: '松本人志',
  tsukkomi: '浜田雅功'
}
console.log(`コンビ名は${downtown2.name}です。ボケは${downtown2.boke}、ツッコミは${downtown2.tsukkomi}です。`);

const downtown3 = {
  name: 'ダウンタウン',
  boke: '松本人志',
  tsukkomi: '浜田雅功',
  introduce() {
    console.log(`コンビ名は${this.name}です。ボケは${this.boke}、ツッコミは${this.tsukkomi}です。`);
  }
}
downtown3.introduce();