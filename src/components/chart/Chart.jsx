import { Bar, BarChart, ResponsiveContainer } from "recharts";
import "./Chart.css";
export default function Chart() {
  const data = [
    {
      temp: "20",
      date: "03.15",
    },
    {
      temp: "27",
      date: "03.16",
    },
  ];
  return (
    <div className="container">
      <ResponsiveContainer height="100%" width="100%">
        <BarChart data={data} height={100} width={200}>
          <Bar dataKey="temp" fill="#ffdd80" aria-busy></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
