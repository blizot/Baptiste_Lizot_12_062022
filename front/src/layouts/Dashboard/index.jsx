import Welcome from '../../components/Welcome'
import Macros from '../../layouts/Macros'
import ActivityChart from '../../components/Chart/Activity'
import SessionsChart from '../../components/Chart/Sessions'
import PerformanceChart from '../../components/Chart/Performance'

function Dashboard() {
  return (
    <main className='dashboard'>
      <Welcome name='Thomas' />
      <ActivityChart />
      <SessionsChart />
      <PerformanceChart />
      <Macros/>
    </main>
  )
}

export default Dashboard
