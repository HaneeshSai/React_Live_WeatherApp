import { useEffect, useState } from "react";
import "./App.css";
import IconPick from "./IconPick";
import BarChart from "./BarChart";
import { WiThermometer, WiWindy } from "weather-icons-react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const cities = ["Bangkok", "London", "Paris", "Dubai", "Singapore"];
let randCity = cities[Math.floor(Math.random() * cities.length)];
const api = "812d8a17a0a2b186777843132381e92f";

export default function App() {
  const [city, setCity] = useState(randCity);
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [weatherData, setWeatherData] = useState({});
  const [date, setDate] = useState();

  const handlesubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const fetchWeather = async () => {
    const response = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
      )
    ).json();
    let utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;

    let nd = new Date(utc + 1000 * response.timezone);
    setDate(nd);
    setWeatherData(response);
  };

  // let utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;

  // let nd = new Date(utc + 1000 * weatherData?.timezone);
  // console.log(nd);
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <form className="form" onSubmit={handlesubmit}>
            <input
              type="text"
              name="cityname"
              placeholder="Search for city"
              spellCheck="false"
              onChange={(e) => {
                let str = e.target.value;
                setCity(str.charAt(0).toUpperCase() + str.slice(1));
                adjustsize(city.length);
              }}
              autoComplete="off"
              autoCapitalize="sentences"
            />
          </form>
          <div className="placeblock">
            <div className="place">
              <h1 id="cityname">{city}</h1>
              <p>
                {regionNames.of(weatherData.sys ? weatherData.sys.country : "")}
              </p>
              <h1 className="temp">{weatherData.main?.temp}° C</h1>
            </div>
            <div className="icon">
              <div className="iconimg">
                <IconPick
                  weather={
                    weatherData.weather ? weatherData.weather[0].main : ""
                  }
                />
              </div>
              <p className="weathertype">
                {weatherData.weather ? weatherData.weather[0].main : ""}
              </p>
              <p className="day">
                {
                  days[
                    new Date(date) != "Invalid Date"
                      ? new Date(date).getDay()
                      : new Date().getDay()
                  ]
                }
              </p>
              <p className="time">
                {new Date(date) != "Invalid Date"
                  ? new Date(date).getDate()
                  : new Date().getDate()}
                /
                {new Date(date) != "Invalid Date"
                  ? new Date(date).getMonth()
                  : new Date().getMonth()}
                /
                {new Date(date) != "Invalid Date"
                  ? new Date(date).getFullYear()
                  : new Date().getFullYear()}{" "}
                ---{" "}
                {new Date(date) != "Invalid Date"
                  ? new Date(date).getHours() > 12
                    ? new Date(date).getHours() - 12
                    : new Date(date).getHours()
                  : new Date().getHours()}
                :
                {new Date(date) != "Invalid Date"
                  ? new Date(date).getMinutes() < 10
                    ? `0${new Date(date).getMinutes()}`
                    : new Date(date).getMinutes()
                  : new Date().getMinutes()}{" "}
                {new Date(date) != "Invalid Date"
                  ? new Date(date).getHours() > 12
                    ? "PM"
                    : "AM"
                  : new Date().getHours()}
              </p>
            </div>
          </div>
          <div className="temperature">
            <h3>TEMPERATURES</h3>
            <div className="tempblock">
              <div className="therm">
                <div style={{ margin: "35px 10px" }}>
                  <WiThermometer size={45} color="#c4cad3" />
                </div>
                <div>
                  <p>Feels Like</p>
                  <h3>{weatherData.main?.feels_like}° C</h3>
                </div>
              </div>
              <div className="bar">
                <BarChart
                  min={weatherData.main?.temp_min}
                  max={weatherData.main?.temp_max}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="weather">
            <h3>WEATHER</h3>
            <p>Pressure : {weatherData.main?.pressure} hPa</p>
            <p>Humidity : {weatherData.main?.humidity} %</p>
            <p>Visibility : {weatherData.visibility} meters</p>
            <p>Cloudiness : {weatherData.clouds?.all} %</p>
          </div>
          <div className="wind">
            <h3>Wind</h3>
            <div className="windblock">
              <div style={{ margin: "31px 10px" }}>
                <WiWindy size={50} color="#c4cad3" />
              </div>
              <div className="winddetails">
                <p>Speed : {weatherData.wind?.speed} m/s</p>
                <p>Direction : {weatherData.wind?.deg}°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const adjustsize = (textlength) => {
  const getFontSize = () => {
    let baseSize = 30;
    if (textlength > baseSize) {
      textlength = baseSize - 2;
    }

    const fontsize = baseSize - textlength;
    return `${fontsize}px`;
  };

  document.getElementById("cityname").style.fontSize = getFontSize(textlength);
};
