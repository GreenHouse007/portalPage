const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=1176b38d2b5a1bbae5c49fe04f33f748";

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const mainInfo = jsObject.main;

    //main weather report
    document.getElementById("current-desc").innerText =
      jsObject.weather[0].description;
    document.getElementById("current-temp").innerText = mainInfo.temp;
    document.getElementById("current-feelsLike").innerText =
      mainInfo.feels_like;
    document.getElementById("current-humid").innerText = mainInfo.humidity;
    document.getElementById("current-windSpeed").innerText =
      jsObject.wind.speed;

    let image = document.createElement("img");
    image.src = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@4x.png`;
    image.alt = "Icon of Current Weather";
    document.getElementById("mainIcon").appendChild(image);
  });

const forecast =
  "https://api.openweathermap.org/data/2.5/forecast?q=Tooele&appid=1176b38d2b5a1bbae5c49fe04f33f748&units=imperial";

fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //console.log(jsObject.list[0].dt_txt);

    // 5 day forcast
    document.getElementById("city").innerText = jsObject.city.name;

    for (let a = 0; a < 5; a++) {
      let d = a + 1;

      let baseDate = new Date(jsObject.list[0].dt_txt);
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let futureDate = new Date(baseDate);
      futureDate.setDate(baseDate.getDate() + a);
      let weekdayName = dayNames[futureDate.getDay()];
      document.getElementById(`dayTitle${d}`).innerText = weekdayName;

      let image = document.createElement("img");
      image.src = `https://openweathermap.org/img/wn/${jsObject.list[a].weather[0].icon}@2x.png`;
      image.alt = "Icon of Forcast Weather";
      document.getElementById(`image${d}`).appendChild(image);

      document.getElementById(`data${d}`).innerText =
        jsObject.list[a].main.temp;
    }

    /*

  for (let y = 0; y < 40; y++) {
      if (jsObject.list[y].dt_txt.includes("18:00")) {
        let d = new Date(jsObject.list[y].dt_txt);
        document.getElementById(`dayTitle${weekDay + 1}`).textContent =
          dayofWeek[d.getDay()];
        weekDay++;
      }
*/
  });
