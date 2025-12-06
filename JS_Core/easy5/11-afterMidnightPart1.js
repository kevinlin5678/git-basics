const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;

function leadingZero(num) {
  return num >= 10 ? String(num) : '0' + String(num);
}

function timeFormatting(hours, mins) {
  return `${leadingZero(hours)}:${leadingZero(mins)}`;
}

function timeOfDay(mins) {
  let deltaMinutes;

  if (mins < 0) {
    deltaMinutes = (mins % MINS_PER_DAY) + MINS_PER_DAY
  } else {
    deltaMinutes = (mins % MINS_PER_DAY)
  }

  let hours = Math.floor(deltaMinutes / MINS_PER_HOUR);
  let remainingMins = deltaMinutes - (hours * MINS_PER_HOUR);

  return timeFormatting(hours, remainingMins);
}