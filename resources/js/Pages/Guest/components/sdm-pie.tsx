import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend, Cell } from "recharts"

const costumLegend = (props: any) => {
  const { payload } = props

  return (
    <ul className="flex flex-col">
      {payload.map((entry: any, index: any) => (
        <li key={`item-${index}`} className="flex items-center">
          <span
            className="w-3 h-3 mr-2 inline-block rounded-full shadow-md"
            style={{ backgroundColor: entry.color }}
          ></span>
          {entry.value} ({entry.payload.capaian}%)
        </li>
      ))}
    </ul>
  )
}

const costumTooltip = (props: any) => {
  const { payload } = props

  return (
    <div className="bg-white p-2">
      <p className="font-bold">{payload[0].payload.name}</p>
      <p className="text-sm">{payload[0].payload.capaian}%</p>
    </div>
  )
}

const costumLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, index, capaian } = props
  const RADIAN = Math.PI / 180
  // eslint-disable-next-line
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  // eslint-disable-next-line
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  // eslint-disable-next-line
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {capaian}%
    </text>
  )
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export function SDMPie({dataSDM}: {dataSDM: any}) {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
          <Pie
            dataKey="capaian"
            data={dataSDM}
            isAnimationActive={false}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={costumLabel}
            labelLine={false}
          />
          {dataSDM.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill="#FF8042" />
            ))}
          <Legend
            verticalAlign="bottom"
            align="center"
            layout="horizontal"
            iconType="circle"
            wrapperStyle={{
              paddingLeft: "20px",
            }}
            content={costumLegend}
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
            // content={costumTooltip}
           />
        </PieChart>
    </ResponsiveContainer>
  )
}