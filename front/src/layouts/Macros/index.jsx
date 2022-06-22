import { useContext } from 'react'
import PropTypes from 'prop-types'

import { ProfileContext } from '../../API/Profile'

import Macro from '../../components/Macro'
import Loader from '../../components/Loader'

function Macros() {
  const { profileData } = useContext(ProfileContext)

  let macrosData = {}
  if (Object.keys(profileData.user).length >= 1) {
    macrosData = profileData?.user.macros
  }

  return (
    <>
      {profileData.loader ? (
        <Loader extraClasses="macros" />
      ) : (
        <div className="macros">
          {Object.keys(macrosData).map((macro) => (
            <Macro key={macro} 
              category={macro} amount={macrosData[macro]}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Macros

Macros.propTypes = {
  macrosData: PropTypes.object
}
