import "./App.css";
import Chart from "./components/chart/Chart";
import Search from "./components/search/Search";

function App() {
  // TODO:
  // - Create charts
  // - Get API data
  // - Create redux stor and slices
  // - Create fallback if city not found

  return (
    <div className="App">
      <Search />
      <Chart />
    </div>
  );
}

export default App;
