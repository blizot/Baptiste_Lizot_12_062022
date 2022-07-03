/**
 * Creates a Score chart using Recharts
 * contains the overall progress score
 * 
 * @param { Object } profileData
 * @param { Boolean } profileData.loader - displays a loader if true
 * @param { Object } profileData.user - contains the API data ready to use
 * may contain an error Object
 * 
 * @returns { React.Component }
 */

import { useContext } from 'react'
import { PieChart, Pie, Legend } from 'recharts'
import PropTypes from 'prop-types'

import { ProfileContext } from '../../../API/Profile'

import Loader from '../../Loader'

import APIMock from '../../../API/Profile/mock/profile.json'
const { REACT_APP_API_MOCK } = process.env

function ScoreChart() {
  const { profileData } = useContext(ProfileContext)

  let score = 0
  if (Object.keys(profileData.user).length >= 1) {
    score = REACT_APP_API_MOCK === 'true' ? APIMock.user.score : profileData?.user.score
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
      {profileData.loader || score?.error ? (
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

ScoreChart.propTypes = {
  score: PropTypes.number
}
