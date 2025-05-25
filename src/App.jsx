import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chart from "./components/chart/Chart";
import Search from "./components/search/Search";
import { useEffect } from "react";
import { fetchWeatherData } from "./store/features/ApiDataSlice";
function App() {
  const selector = useSelector((state) => state.apiData.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData(selector));
  }, [selector]);
  return (
    <div className="App">
      <Search />
      <Chart />
    </div>
  );
}

export default App;
