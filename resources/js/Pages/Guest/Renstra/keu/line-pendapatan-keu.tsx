import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function LinePendapatanKeu({ data }: { data: any }) {
  const dataLine = data.sort(
    (a: { tahun: number }, b: { tahun: number }) => a.tahun - b.tahun
  );
  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={dataLine}>
        <XAxis dataKey="tahun" hide={true} />
        <Line
          type="monotone"
          dataKey="pendapatan"
          name="Pendapatan"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
