import { useEffect, useState, useDeferredValue } from 'react';

import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

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

  const [width, setWidth] = useState(0)
  const deferredWidth = useDeferredValue(width)

  function handleResize() {
    const chartContainer = document.querySelector('.chart__sessions')
    const computedStyle = getComputedStyle(chartContainer)
    let chartWidth = chartContainer.clientWidth
    chartWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)
    setWidth(chartWidth)
  }

  useEffect(() => {
    handleResize()
    setTimeout(() => {
      handleResize()
    }, 250);
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <article className="chart chart__sessions">
      <h2 className="chart__sessions-title">
        Durée moyenne des sessions
      </h2>
      <LineChart 
        data={data}
        width={deferredWidth}
        height={242}>
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
            (dataMax) => dataMax + 15
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
  )
}

export default SessionsChart
