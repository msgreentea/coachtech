// 1
const array = [2, 4, 7, 5, 4, 3, 8];

const once = array.filter(function(val, i, array) {
	return (array.indexOf(val) === i);
});

console.log(once);

// 2
const leapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0 && year % 400 ===0);
}
console.log(leapYear(2020));
console.log(leapYear(2021));