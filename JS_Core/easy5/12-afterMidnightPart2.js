const MINS_PER_DAY = 1440;
const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;


function getMinutes(str) {
  let minutes = (Number(str.slice(0,2)) * MINS_PER_HOUR) + Number(str.slice(3));
  return minutes;
}

function afterMidnight(time) {
  return getMinutes(time) % MINS_PER_DAY
}

function beforeMidnight(time) {
  return ((MINS_PER_DAY - getMinutes(time)) % MINS_PER_DAY);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);