function Welcome(props) {
  const { name } = props

  return (
    <div className="welcome">
      <h1 className="welcome__title">Bonjour <span className="welcome__title--highlight">{name}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Welcome
