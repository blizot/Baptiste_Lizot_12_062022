import Welcome from '../../components/Welcome'
import Macros from '../../layouts/Macros'
import ActivityChart from '../../components/Chart/Activity'
import SessionsChart from '../../components/Chart/Sessions'
import PerformanceChart from '../../components/Chart/Performance'
import ScoreChart from '../../components/Chart/Score'

function Dashboard() {
  return (
    <main className='dashboard'>
      <Welcome/>
      <ActivityChart />
      <SessionsChart />
      <PerformanceChart />
      <ScoreChart />
      <Macros />
    </main>
  )
}

export default Dashboard
