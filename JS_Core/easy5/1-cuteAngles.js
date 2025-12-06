const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(num) {
  let degrees = Math.floor(num);

  let totalMinutes = ((num - degrees) * MINUTES_PER_DEGREE);

  let onlyMinutes = Math.floor(totalMinutes);

  let seconds = Math.floor((totalMinutes - onlyMinutes) * SECONDS_PER_MINUTE);

  return(`${degrees}˚${padZeros(onlyMinutes)}'${padZeros(seconds)}"`);
}

function padZeros(num) {
  let numString = String(num);
  if (numString.length < 2) {
    return numString = '0' + numString;
  } else {
    return numString;
  }
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
