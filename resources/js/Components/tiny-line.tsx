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

export function TinyLine({ data, name }: { data: any; name: string }) {
  const line = data.filter((item: { name: string }) => {
    if (item.name == name) {
      return item;
    }
  });

  const dataLine = line.sort(
    (a: { tahun: number }, b: { tahun: number }) => a.tahun - b.tahun
  );
  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={dataLine}>
        <XAxis dataKey="tahun" hide={true} />
        <Line
          type="monotone"
          dataKey="capaian_individu"
          name="Capaian Individu"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
