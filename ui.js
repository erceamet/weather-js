class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.pressure = document.getElementById("w-pressure");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    const t = parseFloat(weather.main.temp) - 273.15;
    this.string.textContent = t.toFixed(0) + "°C";
    const i = weather.weather[0].icon;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${i}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    const f = parseFloat(weather.main.feels_like) - 273.15;
    const fl = f.toFixed(0);
    this.feelsLike.textContent = `Feels Like: ${fl}°C`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    const w = (weather.wind.speed * 3.6).toFixed(1);
    this.wind.textContent = `Wind: ${w} kph`;
  }
}
