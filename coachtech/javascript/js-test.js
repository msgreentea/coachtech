// 1
const array = [2, 4, 7, 5, 4, 3, 8];

const once = array.filter(function(val, i, array) {
	return (array.indexOf(val) === i);
});

console.log(once);

// 2
// const leapYear = year => {}
const leapYear = function (year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "閏年です。"
  } else if (year % 400 === 0) {
    return "閏年です。"
  } else {
    return "閏年ではありません。"
  }
}

console.log(leapYear(2020));

console.log(leapYear(2021));

console.log(leapYear(2100));
console.log(leapYear(2000));