const day = document.querySelector("#day");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function addZero(value) {
  return value.toString().padStart(2, "0");
}

function getDayAbbr() {
  return days[new Date().getDay()];
}
function updateTime() {
  day.textContent = getDayAbbr();
  hours.textContent = addZero(new Date().getHours());
  minutes.textContent = addZero(new Date().getMinutes());
  seconds.textContent = addZero(new Date().getSeconds());
}

setInterval(updateTime, 1000);
updateTime();
