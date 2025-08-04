// updates date in the footer
let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

//ads the year to the footer next to name
let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;
