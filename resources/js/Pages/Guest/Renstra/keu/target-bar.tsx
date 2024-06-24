import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import dataKeu from "@/datas/keu";

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

const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
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

export function TargetBar({ props }: { props: any }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={props}>
        <XAxis
          dataKey="tahun"
          stroke="#888888"
          fontSize={12}
          tickLine={true}
          axisLine={true}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={true}
          axisLine={true}
          tickFormatter={(value) => `${formatter(value)}`}
        />
        <Bar
          dataKey="value"
          name="Target"
          fill="#1d8afa"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="pendapatan"
          name="Pendapatan"
          fill="#adfa1d"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="belanja"
          name="Belanja"
          fill="red"
          radius={[4, 4, 0, 0]}
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
          formatter={(value: any) => formatCurrency(value)}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
