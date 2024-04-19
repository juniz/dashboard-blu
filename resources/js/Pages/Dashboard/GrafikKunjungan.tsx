import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import dataSDM from "@/datas/sdm";

export function GrafikKunjungan({ props }: { props: any }) {
  const data = props.filter(
    (item: { name: string | string[]; target: any; real: any }, index: any) => {
      if (item.name.includes("Presentase")) {
        return {
          name: item.name,
          target: item.target,
          real: item.real,
        };
      }
    }
  );

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
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
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="target"
          name="Target"
          fill="#adfa1d"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="real"
          name="Capaian"
          fill="#1d8afa"
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
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
