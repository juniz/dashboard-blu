import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export function DokpolBar({props}: {props: any}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={props}>
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
        <Bar dataKey="target" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="real" fill="#1d8afa" radius={[4, 4, 0, 0]} />
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
  )
}