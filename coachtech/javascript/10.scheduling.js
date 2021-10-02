// function say(phrase, who) {
//   alert(phrase + ',' + who);
// }
// setTimeout(say, 1000,"Hello","COACHTECH");

// function say() {
//   alert('Hello');
// }
// const timerld = setTimeout(say, 1000);
// clearTimeout(timerld);

function say() {
  alert('Hello');
}
const timerld = setInterval(say, 1000);
function stop() {
  clearInterval(timerld);
}
setTimeout(stop,5000)