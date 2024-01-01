function searchQuery(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = document.querySelector("#currentCity");
  city.innerHTML = `${searchInput.value}`;
}

let search = document.querySelector("#search-city");
search.addEventListener("submit", searchQuery);

let date = new Date();
let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsy",
  "Friday",
  "Saturday",
];
let currentWeekDay = weekDay[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${currentWeekDay}, ${hours}:${minutes}`;
