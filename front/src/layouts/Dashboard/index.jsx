import Welcome from '../../components/Welcome'
import Macros from '../../layouts/Macros'
import DailyChart from '../../components/Chart/Daily'
import DurationChart from '../../components/Chart/Duration'

function Dashboard() {
  return (
    <main className='dashboard'>
      <Welcome name='Thomas' />
      <DailyChart />
      <DurationChart />
      <Macros/>
    </main>
  )
}

export default Dashboard
