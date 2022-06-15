import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function SessionsChart() {
  const data = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 40,
    },
    {
      day: 3,
      sessionLength: 50,
    },
    {
      day: 4,
      sessionLength: 30,
    },
    {
      day: 5,
      sessionLength: 30,
    },
    {
      day: 6,
      sessionLength: 50,
    },
    {
      day: 7,
      sessionLength: 50,
    },
  ]

  const CustomLegend = () => {
    return (
      <h2 className="chart__sessions-title">
        Durée moyenne des sessions
      </h2>
    )
  }

  return (
    <article className="chart chart__sessions">
      <ResponsiveContainer width={242} aspect={1}>
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={(item) => {
              const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
              return weekday[item - 1]
            }}
          />
          <YAxis
            dataKey="sessionLength"
            hide={true}
            domain={[
              (dataMin) => dataMin - 10,
              (dataMax) => dataMax + 10
            ]}
          />
          <Tooltip
            formatter={(value) => [value, '']}
            separator=""
            labelStyle={{ display: 'none' }}
            itemStyle={{
              backgroundColor: '#fff',
              color: '#000',
            }}
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              fontSize: '0.75rem',
              textAlign: 'center',
            }}
            cursor={{ display: 'none' }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            content={<CustomLegend />}
          />
          <Line
            dataKey="sessionLength"
            type="natural"
            dot={false}
            unit=" min"
            strokeWidth={3}
            className="chart__sessions--length"
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  )
}

export default SessionsChart
