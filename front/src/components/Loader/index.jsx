import logo from '../../assets/images/logo_icon.svg'

function Loader(props) {
  const { extraClasses } = props

  return (
    <div className={`loader ${extraClasses}`}>
      <img src={logo} alt="" className="loader__image" />
    </div>
  )
}

export default Loader
