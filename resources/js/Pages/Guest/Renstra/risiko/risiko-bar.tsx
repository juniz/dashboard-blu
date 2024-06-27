import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import dataManajemenResiko from "@/datas/data-menejemen-resiko";

const costumTooltip = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-md">
        <p className="font-bold text-gray-800">
          Masalah{` : ${payload[0].payload.masalah}`}
        </p>
        <p className="font-bold text-gray-800">
          Dampak{` : ${payload[0].payload.dampak}`}
        </p>
        <p className="font-bold text-gray-800">
          Probabilitas{` : ${payload[0].payload.probabilitas}`}
        </p>
        <p className="font-bold text-gray-800">
          Controllability{` : ${payload[0].payload.controllability}`}
        </p>
        <p className="font-bold text-gray-800">
          Scoring{` : ${payload[0].payload.scoring}`}
        </p>
      </div>
    );
  }
  return null;
};

export function RisikoBar() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={dataManajemenResiko}>
        <XAxis
          dataKey="kategori"
          stroke="#888888"
          fontSize={12}
          tickLine={true}
          axisLine={true}
        />
        <YAxis
          stroke="#888888"
          dataKey="scoring"
          fontSize={12}
          tickLine={true}
          axisLine={true}
          // tickFormatter={(value) => `${formatter(value)}`}
        />
        <Bar
          dataKey="scoring"
          name="Scoring"
          fill="#adfa1d"
          radius={[4, 4, 0, 0]}
        >
          {dataManajemenResiko.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
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
          content={costumTooltip}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
