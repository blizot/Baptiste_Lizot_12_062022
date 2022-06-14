import Welcome from '../../components/Welcome'
import Macros from '../../layouts/Macros'
import DailyChart from '../../components/Chart/Daily'

function Dashboard() {
  return (
    <main className='dashboard'>
      <Welcome name='Thomas' />
      <DailyChart/>
      <Macros/>
    </main>
  )
}

export default Dashboard
