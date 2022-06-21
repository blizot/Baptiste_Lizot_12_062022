import { useEffect, useState, useDeferredValue, useContext } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import { ProfileContext } from '../../../API/Profile'

import handleResize from '../responsive'

function ActivityChart() {
  const { profileData, isProfileDataLoading: loader } =
    useContext(ProfileContext)

  let sessionsData = []
  if (Object.keys(profileData).length >= 1) {
    sessionsData = profileData?.['user-activity']?.data?.sessions
    sessionsData.forEach((d) => {
      d.weight = d?.kilogram
      d.burntCalories = d?.calories
    })
  }

  const [width, setWidth] = useState(0)
  const deferredWidth = useDeferredValue(width)

  function callHandleResize() {
    handleResize('.js_chart-activity', setWidth)
  }

  useEffect(() => {
    callHandleResize()
    setTimeout(() => {
      callHandleResize()
    }, 250)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', callHandleResize)
    return () => {
      window.removeEventListener('resize', callHandleResize)
    }
  })

  const CustomLegend = (props) => {
    const { payload } = props

    return (
      <div className="chart__activity-legend">
        <h2 className="chart__activity-legend-title">Activité quotidienne</h2>
        <ul className="chart__activity-legend-description">
          {payload.map((entry, index) => (
            <li className={`
                recharts-legend-item 
                legend-item-${index + 1}
                chart__activity-legend-description-item
              `}
              key={`item-${index}`}
            >
              <svg className="recharts-surface"
                width="10" height="10" viewBox="0 0 32 32" version="1.1"
              >
                <path cx="16" cy="16" transform="translate(16, 16)" 
                  d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
                  type={entry.type}
                  className={`
                    recharts-symbols
                    chart__activity-legend-description-${entry.type}--${entry.dataKey}
                  `}
                ></path>
              </svg>
              <span className="recharts-legend-item-text chart__activity-legend-description-text">
                {entry.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const CustomShape = (props) => {
    const { x, y, width, height } = props

    const path = (x, y, width, height) => {
      return (
        `M ${x}, ${y + width / 2} 
        v ${height - width / 2} 
        h ${width} 
        v ${-(height - width / 2)} 
        A ${width / 2}, ${width / 2} 0 0 0 ${x}, ${y + width / 2} 
        Z`
      )
    }

    return <path d={path(x, y, width, height)} />
  }

  return (
    <>
      {loader ? (
        ''
      ) : (
        <article className="chart chart__activity js_chart-activity">
          <BarChart 
            data={sessionsData}
            width={deferredWidth}
            height={280}
          >
            <CartesianGrid
              strokeDasharray={4}
              vertical={false} 
            />
            <XAxis
              tickFormatter={(item) => item + 1}
              tickLine={false}
              tickMargin={20}
              height={35}
            />
            <YAxis
              dataKey="weight"
              orientation="right"
              domain={[
                (dataMin) => Math.round(dataMin - 1),
                (dataMax) => Math.round(dataMax + 1),
              ]}
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              width={40}
            />
            <YAxis
              yAxisId="hiddenAxis"
              hide={true}
              dataKey="burntCalories"
              domain={[0, (dataMax) => dataMax + 50]}
            />
            <Tooltip
              itemStyle={{
                backgroundColor: '#f00',
                color: '#fff',
              }}
              contentStyle={{
                backgroundColor: '#f00',
                border: 'none',
                fontSize: '0.75rem',
                textAlign: 'center',
              }}
              labelStyle={{ display: 'none' }}
              cursor={{
                fill: '#e0e0e0',
                opacity: 0.5,
              }}
              formatter={(value) => [value, '']}
              separator=""
              offset={20}
            />
            <Legend
              align="right"
              verticalAlign="top"
              iconType="circle"
              height={75}
              content={<CustomLegend />}
            />
            <Bar
              dataKey="weight"
              name="Poids (kg)"
              unit="kg"
              barSize={8}
              shape={<CustomShape />}
              className="chart__activity--weight"
            />
            <Bar
              yAxisId="hiddenAxis"
              dataKey="burntCalories"
              name="Calories brûlées (kCal)"
              unit="kCal"
              barSize={8}
              shape={<CustomShape />}
              className="chart__activity--burntCalories"
            />
          </BarChart>
        </article>
      )}
    </>
  )
}

export default ActivityChart
