import Macro from '../../components/Macro'

function Macros() {
  const array = ['calorie', 'protein', 'carbohydrate', 'lipid']

  return (
    <div className='macros'>
      {array.map(element => <Macro key={element} category={element} />)}
    </div>
  )
}

export default Macros
