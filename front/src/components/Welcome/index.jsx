import { useContext } from 'react'
import PropTypes from 'prop-types'

import { ProfileContext } from '../../API/Profile'

function Welcome() {
  const { profileData } = useContext(ProfileContext)
  const name = profileData?.user.name

  return (
    <div className="welcome">
      <h1 className="welcome__title">
        Bonjour <span className="welcome__title--highlight">{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Welcome

Welcome.propTypes = {
  name: PropTypes.string
}
