import Search from "./Search";
import Forecast from "./Forecast";
import "./styles.css";

export default function App() {
  return (
    <div className="App m-4">
      <h1>Weather App</h1>
      <h2>
        <Search />
        <br />
        <Forecast />
      </h2>
      <small>
        <a
          href="//https://github.com/ShimaTarighat/weather-react-app.git"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          open-source code{" "}
        </a>
        by Shima Miri
      </small>
    </div>
  );
}
