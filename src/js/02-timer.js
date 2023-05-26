import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const {startBtn} = refs;
    if (selectedDates[0] <= Date.now()) {
      startBtn.disabled = true;

      Notiflix.Notify.failure('Please choose a date in the future');
      // alert('Please choose a date in the future');
    };
    if (selectedDates[0] > Date.now()) {
      startBtn.disabled = false;
    };
  },
};

const refs = {
  dateInput: flatpickr('#datetime-picker', options),
  startBtn: document.querySelector('[data-start]'),
  daysCounter: document.querySelector('[data-days]'),
  hoursCounter: document.querySelector('[data-hours]'),
  minutesCounter: document.querySelector('[data-minutes]'),
  secondsCounter: document.querySelector('[data-seconds]'),
};

let timerId = 0;

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onCountdown);

function onCountdown() {
  const {dateInput} = refs;
  
  timerId = setInterval(() => {
    if (dateInput.selectedDates[0] - Date.now() <= 0) {
      clearInterval(timerId);
      return;
    }

    const date = convertMs(dateInput.selectedDates[0] - Date.now());

    addLeadingZero(date)
  }, 1000)
};

function addLeadingZero(value) {
  const {daysCounter, hoursCounter, minutesCounter, secondsCounter} = refs;
  const {days, hours, minutes, seconds} = value;

  daysCounter.textContent = String(days).padStart(2, "0");
  hoursCounter.textContent = String(hours).padStart(2, "0");
  minutesCounter.textContent = String(minutes).padStart(2, "0");
  secondsCounter.textContent = String(seconds).padStart(2, "0");
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};