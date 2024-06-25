import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
} from "recharts";
import dataDiklit from "@/datas/data-diklit";

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

export function DiklitChart({ props }: { props: any }) {
  //   console.log(props);
  const data = dataDiklit.filter((item) => {
    if (item.tahun == props) {
      return item;
    }
  });
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart data={data}>
        <XAxis
          dataKey="bulan"
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
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#888888"
          dataKey="jumlah"
          fontSize={12}
          tickLine={true}
          axisLine={true}
          tickFormatter={(value) => `${formatter(value)}`}
        />
        <Bar
          dataKey="anggaran"
          name="Anggaran"
          fill="#1d8afa"
          radius={[2, 4, 0, 0]}
        />
        <Line
          type="monotone"
          dataKey="jumlah"
          name="Jumlah Peserta"
          stroke="green"
          yAxisId="right"
          strokeWidth={2}
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
          //   formatter={(value: any) => formatCurrency(value)}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
