import Welcome from '../../components/Welcome'
import Macros from '../../layouts/Macros'

function Dashboard() {
  return (
    <main className='dashboard'>
      <Welcome name='Thomas' />
      <Macros/>
    </main>
  )
}

export default Dashboard
