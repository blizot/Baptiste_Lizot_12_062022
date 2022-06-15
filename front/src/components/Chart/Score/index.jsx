import { PieChart, Pie, Legend } from 'recharts'

function ScoreChart() {
  const score = 0.3
  const finalAngle = 360 * score + 90

  const CustomLegend = () => {
    return (
      <>
        <h2 className="chart__score-title">Score</h2>
        <p className="chart__score-legend-amount">{parseInt(score * 100)}%</p>
        <p className="chart__score-legend-text">de votre objectif</p>
      </>
    )
  }

  return (
    <article className="chart chart__score">
      <PieChart width={274} height={274}>
        <Pie
          data={[{ full: 1 }]}
          dataKey="full"
          outerRadius="64.25%"
          fill="#fff"
          isAnimationActive={false}
        />
        <Pie
          data={[{ full: 1 }]}
          dataKey="full"
          startAngle={90}
          endAngle={finalAngle}
          innerRadius="65%"
          outerRadius="74.25%"
          className="chart__score-fill"
        />
        <Legend
          align="center"
          verticalAlign="middle"
          content={<CustomLegend />}
        />
      </PieChart>
    </article>
  )
}

export default ScoreChart
