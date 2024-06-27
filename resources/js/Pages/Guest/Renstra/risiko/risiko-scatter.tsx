import {
  ScatterChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Scatter,
} from "recharts";
import dataManajemenResiko from "@/datas/data-menejemen-resiko";

const formatter = (number: number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toString() + "M";
  } else if (number > 1000) {
    return (number / 1000).toString() + "K";
  } else {
    return number.toString();
  }
};

const legendCostum = (props: any) => {
  const { payload } = props;
  return (
    <div className="flex flex-row items-center justify-center space-x-2">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex flex-row items-center">
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: entry.color,
              borderRadius: "50%",
            }}
          ></div>
          <span className="text-base font-medium mx-2">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const labelFormatter = (value: any) => {
  const count = dataManajemenResiko.filter((item) => item.kategori === value);
  return `${value}`;
};

const formatTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any[];
  label: string;
}) => {
  if (active) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-md">
        <p className="text-sm font-bold">{label}</p>
        {payload.map((item, index) => (
          <p key={index} className="text-sm">
            {item.name}:{" "}
            {item.dampak.toString() + " - " + item.probabilitas.toString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function RisikoScatter() {
  //   console.log(props);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ScatterChart data={dataManajemenResiko}>
        <XAxis
          dataKey="probabilitas"
          name="Probabilitas"
          stroke="#888888"
          fontSize={12}
          tickLine={true}
          axisLine={true}
          ticks={[1, 2, 3, 4, 5]}
          type="number"
          allowDuplicatedCategory={false}
          minTickGap={30}
        />
        <YAxis
          dataKey="dampak"
          name="Dampak"
          stroke="#888888"
          fontSize={12}
          ticks={[1, 2, 3, 4, 5]}
          tickLine={true}
          axisLine={true}
          allowDuplicatedCategory={false}
          //   tickFormatter={(value) => `${formatter(value)}`}
        />
        <CartesianGrid />
        <Scatter
          name="Risiko"
          data={dataManajemenResiko}
          fill="#1d8afa"
          shape="circle"
        />
        <Legend verticalAlign="bottom" height={36} content={legendCostum} />
        <Tooltip
          cursor={false}
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          labelStyle={{
            color: "#000",
            fontWeight: "bold",
          }}
          itemStyle={{ color: "#000" }}
          formatter={(value: any) => formatTooltip(value)}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
