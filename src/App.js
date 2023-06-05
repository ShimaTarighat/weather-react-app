import Search from "./Search";
import Forecast from "./Forecast";
import "./styles.css";

export default function App() {
  return (
    <div className="App m-4">
      <h1>Weather App</h1>
      <h2>
        <Search />
      </h2>
    </div>
  );
}
