import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
  } from "recharts";
  
const CoinChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8ec649"
          strokeWidth={2}
          dot={false}
        />
        <XAxis dataKey="time" hide />
        <YAxis domain={['auto', 'auto']} hide />
        <Tooltip
          contentStyle={{ backgroundColor: "#333", border: "none" }}
          labelStyle={{ color: "#8ec649" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
  
export default CoinChart;
  