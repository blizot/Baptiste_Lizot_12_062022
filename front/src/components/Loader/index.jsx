/**
 * Creates the app's Loader
 * 
 * @param { String } [extraClasses] - to apply extra styles to the loader container
 * 
 * @returns { React.Component }
 */

import logo from '../../assets/images/logo_icon.svg'

function Loader(props) {
  const { extraClasses } = props
  console.log(extraClasses)

  return (
    <div className={`loader ${extraClasses}`}>
      <img src={logo} alt="" className="loader__image" />
    </div>
  )
}

export default Loader
