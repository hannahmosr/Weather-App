function searchQuery(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let NewCity = document.querySelector("#current-city");
  let city = searchInput.value;

  let apiKey = "7394a3ffab5cc09c86e6t0co260f5ec2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  NewCity.innerHTML = `${city}`;
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
