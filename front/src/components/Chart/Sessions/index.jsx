import { useEffect, useState, useDeferredValue, useContext } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import PropTypes from 'prop-types'

import { ProfileContext } from '../../../API/Profile'

import Loader from '../../Loader'

import handleResize from '../responsive';

import frenchTranslation from '../../../assets/translations/french.json'

function SessionsChart() {
  const { profileData } = useContext(ProfileContext)

  let sessionsData = []
  if (Object.keys(profileData.user).length >= 1) {
    sessionsData = profileData?.user.averageSessions
  }

  // make the component responsive
  const [width, setWidth] = useState(0)
  const deferredWidth = useDeferredValue(width)

  function callHandleResize() {
    handleResize('.js_chart-sessions', setWidth)
  }

  useEffect(() => {
    callHandleResize()
    // the browser lies the first time
    setTimeout(() => {
      callHandleResize()
    }, 250);
  }, [])

  useEffect(() => {
    window.addEventListener('resize', callHandleResize)
    return () => {
      window.removeEventListener('resize', callHandleResize)
    }
  })

  return (
    <>
      {profileData.loader ? (
        <Loader extraClasses="chart chart__sessions js_chart-sessions" />
      ) : (
        <article className="chart chart__sessions js_chart-sessions">
          <h2 className="chart__sessions-title">
            Durée moyenne des sessions
          </h2>
          <LineChart 
            data={sessionsData}
            width={deferredWidth}
            height={242}
          >
            <XAxis
              dataKey="weekDay"
              tickLine={false}
              axisLine={false}
              tickFormatter={
                (item) => frenchTranslation.weekDays[item]?.charAt(0).toUpperCase()
              }
            />
            <YAxis
              dataKey="sessionLength"
              hide={true}
              domain={[
                (dataMin) => dataMin - 15,
                (dataMax) => dataMax + 20
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
            <Line
              dataKey="sessionLength"
              type="natural"
              dot={false}
              unit=" min"
              strokeWidth={3}
              className="chart__sessions--length"
            />
          </LineChart>
        </article>
      )}
    </>
  )
}

export default SessionsChart

SessionsChart.propTypes = {
  sessionsData: PropTypes.array
}
