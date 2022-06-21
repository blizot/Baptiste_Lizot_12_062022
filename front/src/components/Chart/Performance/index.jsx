import { useContext } from 'react'
import { RadarChart, PolarGrid, Radar, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

import { ProfileContext } from '../../../API/Profile'

function PerformanceChart() {
  const frenchTranslation = {
    cardio: 'cardio',
    energy: 'energie',
    endurance: 'endurance',
    strength: 'force',
    speed: 'vitesse',
    intensity: 'intensité'
  }

  const { profileData, isProfileDataLoading: loader } =
    useContext(ProfileContext)

  let performanceData = {}
  if (Object.keys(profileData).length >= 1) {
    performanceData = profileData?.['user-performance']?.data?.data
    const valueTags = profileData?.['user-performance']?.data?.kind
    performanceData.forEach(d => d.tag = valueTags[d.kind])
  }

  return (
    <>
      {loader ? (
        '' 
      ) : (
        <article className="chart chart__performance">
          <h2 className="chart__performance-title">Performance</h2>
          <RadarChart
            data={performanceData}
            width={272}
            height={272}
            outerRadius={90}
            startAngle={-150}
            endAngle={210}
          >
            <PolarGrid />
            <PolarAngleAxis 
              dataKey="tag"
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
