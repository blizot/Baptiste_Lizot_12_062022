/**
 * Creates a Performance chart using Recharts
 * contains score by activity kinds
 * 
 * @param { Object } profileData
 * @param { Boolean } profileData.loader - displays a loader if true
 * @param { Object } profileData.user - contains the API data ready to use
 * 
 * @returns { React.Component }
 */

import { useContext } from 'react'
import { RadarChart, PolarGrid, Radar, PolarAngleAxis, PolarRadiusAxis} from 'recharts'
import PropTypes from 'prop-types'

import { ProfileContext } from '../../../API/Profile'

import Loader from '../../Loader'

import frenchTranslation from '../../../assets/translations/french.json'

function PerformanceChart() {
  const { profileData } = useContext(ProfileContext)

  let performanceData = {}
  if (Object.keys(profileData.user).length >= 1) {
    performanceData = profileData?.user.performance
  }

  return (
    <>
      {profileData.loader || performanceData?.error ? (
        <Loader extraClasses="chart chart__performance" />
      ) : (
        <article className="chart chart__performance">
          <h2 className="chart__performance-title">Performance</h2>
          <RadarChart
            data={performanceData}
            width={272}
            height={272}
            outerRadius={90}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={(item) => frenchTranslation[item]}
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
      )}
    </>
  )
}

export default PerformanceChart

PerformanceChart.propTypes = {
  performanceData: PropTypes.object
}
