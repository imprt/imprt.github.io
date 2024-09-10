const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

const targetDate = new Date("2024-10-20T23:59:59").getTime();

const timeFunction = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    clearInterval(timeFunction);
    return;
  }

  const dayValue = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hourValue = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minValue = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secValue = Math.floor((timeLeft % (1000 * 60)) / 1000);

  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000);

document.onkeydown = function(e) {
  if (e.keyCode == 123) {
    return false;
  }
};
