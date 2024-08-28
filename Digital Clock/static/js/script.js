let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");
let meridiumContainer = document.querySelector(".meridium");

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateClock() {
    const today = new Date();
    let date = today.getDate();
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];


    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    let period = "AM";
    if (hours >= 12) {
        period = "PM";
    }

    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span> <span>${month}</span></p>`;
    hoursContainer.textContent = hours + ":";
    minutesContainer.textContent = minutes + ":";
    secondsContainer.textContent = seconds;
    meridiumContainer.textContent = period;
}

setInterval(updateClock, 1000);
