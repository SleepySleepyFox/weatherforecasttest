import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import "./Chart.css";
import { useSelector } from "react-redux";

export default function Chart() {
  const data = useSelector((state) => state.apiData.data);
  const error = useSelector((state) => state.apiData.error);
  console.log("error: ", error);
  console.log("data: ", data);

  const render = () => {
    if ((data === undefined || data === null) && !error) {
      return <></>;
    }
    if (data !== undefined && !error) {
      return (
        <div className="container">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart data={data.list} height={100} width={200}>
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis />
              <Bar dataKey="main.temp" fill="#ffdd80" aria-busy></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    if (data == undefined && error) {
      return <>City Not Found</>;
    }
  };
  return <div>{render()}</div>;
}
