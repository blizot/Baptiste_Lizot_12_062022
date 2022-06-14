import { useEffect, useState, useDeferredValue } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

function DailyChart() {
  const data = [
    {
      weight: 69.8,
      burntCalories: 200,
    },
    {
      weight: 70,
      burntCalories: 300,
    },
    {
      weight: 69.9,
      burntCalories: 350,
    },
    {
      weight: 69.8,
      burntCalories: 200,
    },
    {
      weight: 69.9,
      burntCalories: 200,
    },
    {
      weight: 69.9,
      burntCalories: 180,
    },
    {
      weight: 69.6,
      burntCalories: 200,
    },
    {
      weight: 70.2,
      burntCalories: 350,
    },
    {
      weight: 69.7,
      burntCalories: 310,
    },
    {
      weight: 69.6,
      burntCalories: 325,
    },
  ]

  const [width, setWidth] = useState('100%')
  const deferredWidth = useDeferredValue(width)

  useEffect(() => {
    function handleResize() {
      setWidth(document.querySelector('.chart__daily')?.clientWidth - 32)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const CustomLegend = (props) => {
    const { payload } = props

    return (
      <div className='chart__daily-legend'>
        <h2 className="chart__daily-legend-title">Activité quotidienne</h2>
        <ul className="chart__daily-legend-description">
          {payload.map((entry, index) => (
            <li
              className={`recharts-legend-item legend-item-${index + 1} chart__daily-legend-description-item`}
              key={`item-${index}`}
            >
              <svg className="recharts-surface" width="10" height="10" viewBox="0 0 32 32" version="1.1">
                <path cx="16" cy="16" 
                  type={entry.type} 
                  className={`recharts-symbols chart__daily-legend-description-${entry.type}--${entry.dataKey}`} 
                  transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
                ></path>
              </svg>
              <span className="recharts-legend-item-text chart__daily-legend-description-text">
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
      return `M ${x}, ${(y + (width / 2))} 
        v ${(height - (width / 2))} 
        h ${width} 
        v ${(-(height - (width / 2)))} 
        A ${(width / 2)}, ${(width / 2)} 0 0 0 ${x}, ${(y + (width / 2))} 
        Z`
    }

    return <path d={path(x, y, width, height)} />
  }

  return (
    <article className="chart__daily">
      <ResponsiveContainer width={deferredWidth} height={280}>
        <BarChart data={data}>
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
              color: '#fff' 
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
              opacity: 0.5 
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
            className="chart__daily--weight"
          />
          <Bar
            yAxisId="hiddenAxis"
            dataKey="burntCalories"
            name="Calories brûlées (kCal)"
            unit="kCal"
            barSize={8}
            shape={<CustomShape />}
            className="chart__daily--burntCalories"
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}

export default DailyChart
