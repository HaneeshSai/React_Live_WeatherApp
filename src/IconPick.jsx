import {
  WiThunderstorm,
  WiDayShowers,
  WiRain,
  WiSnow,
  WiWindy,
  WiDayHaze,
  WiFog,
  WiDust,
  WiSmoke,
  WiSandstorm,
  WiSmog,
  WiTornado,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiShowers,
  WiSnowflakeCold,
  WiCloudyWindy,
  WiCloud,
} from "weather-icons-react";

export default function IconPick({ weather }) {
  switch (weather) {
    case "Thunder":
      return <WiThunderstorm size={110} color="#c7c98f" />;
      break;
    case "Drizzle":
      return <WiShowers size={110} color="#c7c98f" />;
      break;
    case "Rain":
      return <WiRain size={110} color="#c7c98f" />;
      break;
    case "Snow":
      return <WiSnowflakeCold size={110} color="#c7c98f" />;
      break;
    case "Mist":
      return <WiCloudyWindy size={110} color="#c7c98f" />;
      break;
    case "Smoke":
      return <WiSmoke size={110} color="#c7c98f" />;
      break;
    case "Haze":
      return <WiDayHaze size={110} color="#c7c98f" />;
      break;
    case "Dust":
      return <WiDust size={110} color="#c7c98f" />;
      break;
    case "Fod":
      return <WiFog size={110} color="#c7c98f" />;
      break;
    case "Sand":
      return <WiSandstorm size={110} color="#c7c98f" />;
      break;
    case "Ash":
      return <WiSmog size={110} color="#c7c98f" />;
      break;
    case "Sqall":
      return <WiCloud size={110} color="#c7c98f" />;
      break;
    case "Tornado":
      return <WiTornado size={110} color="#c7c98f" />;
      break;
    case "Clear":
      return <WiDaySunnyOvercast size={110} color="#c7c98f" />;
      break;
    case "Clouds":
      return <WiCloud size={110} color="#c7c98f" />;
      break;
    default:
      return <WiCloud size={110} color="#c7c98f" />;
  }
}
