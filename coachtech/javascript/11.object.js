const user = {
  name: "太郎",
  age: 20,
};

console.log(user. name);
console.log(user.age);

const user2 = {
  say: function () {
    console.log("hello");
  },
};

user2.say();

const uer = {
  say() {
    console.log("hello");
  },
};

user2.say();



const user3 = {
  name: "太郎",
  age: 20,
  say: function () {
    console.log(this.name);
  },
};

user3.say();


const o = { p: 42, q: true };
const { p: a, q: b } = o;

console.log(a);
console.log(b);

// practice
const school = {
  name: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
  createSentense() {
    let data;
    this.skills.forEach((skill, index) => {
      if (index == 0) {
        data = skill;
      } else {
        data = `${data}と${skill}`;
      }
    });
    return `${this.name}は${this.month}ヶ月で${data}を学ぶことができます`;
  },
};

console.log(school.createSentense());