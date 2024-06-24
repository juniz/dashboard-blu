import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

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

export function PendapatanBar({ props }: { props: any }) {
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
          name="Pendapatan"
          fill="#adfa1d"
          radius={[4, 4, 0, 0]}
        />
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
