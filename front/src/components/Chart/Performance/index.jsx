import { RadarChart, PolarGrid, Radar, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

function PerformanceChart() {
  const data = {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 200, kind: 1 },
      { value: 240, kind: 2 },
      { value: 80, kind: 3 },
      { value: 80, kind: 4 },
      { value: 220, kind: 5 },
      { value: 110, kind: 6 },
    ],
  }

  return (
    <article className="chart chart__performance">
      <h2 className="chart__performance-title">Performance</h2>
      <RadarChart
        data={data.data}
        width={272}
        height={272}
        outerRadius={90}
        startAngle={-150}
        endAngle={210}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={(item) => data.kind[item]}
        />
        <PolarRadiusAxis
          axisLine={false}
          tick={false}
          domain={[0, 250]}
        />
        <Radar
          dataKey="value"
          className="chart__performance-fill"
        />
      </RadarChart>
    </article>
  )
}

export default PerformanceChart
