import { useSelector } from "react-redux";
import "./App.css";
import Chart from "./components/chart/Chart";
import Search from "./components/search/Search";
import axios from "axios";
import { useEffect } from "react";
function App() {
  // TODO:
  // - Create charts
  // - Create fallback if city not found
  const selector = useSelector((state) => state.apiData.location);
  const data = async (e) => {
    if (e === null || e === undefined) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=${process.env.REACT_APP_API_KEY}`,
      );
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    data(selector);
  }, [selector]);

  return (
    <div className="App">
      <Search />
      <Chart />
    </div>
  );
}

export default App;
