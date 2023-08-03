import "./barChartBox.scss";
import { ResponsiveContainer, Bar, BarChart, Tooltip } from "recharts";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <div className="chart">
        <h1>{props.title}</h1>
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
