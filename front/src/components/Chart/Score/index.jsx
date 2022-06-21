import { useContext } from 'react'
import { PieChart, Pie, Legend } from 'recharts'

import { ProfileContext } from '../../../API/Profile'

import Loader from '../../Loader'

function ScoreChart() {
  const { profileData, isProfileDataLoading: loader } =
    useContext(ProfileContext)

  let score = 0
  if (Object.keys(profileData).length >= 1) {
    score =
      profileData?.user?.data?.score || profileData?.user?.data?.todayScore
  }

  const finalAngle = 360 * score + 90

  const CustomLegend = () => {
    return (
      <>
        <p className="chart__score-legend-amount">{parseInt(score * 100)}%</p>
        <p className="chart__score-legend-text">de votre objectif</p>
      </>
    )
  }

  return (
    <>
      {loader ? (
        <Loader extraClasses="chart chart__score"/>
      ) : (
        <article className="chart chart__score">
          <h2 className="chart__score-title">Score</h2>
          <PieChart
            width={272}
            height={272}
          >
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
      )}
    </>
  )
}

export default ScoreChart
