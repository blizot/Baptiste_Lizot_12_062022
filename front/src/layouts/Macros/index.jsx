/**
 * Creates the Macronutients tiles
 *
 * @param { Object } profileData
 * @param { Boolean } profileData.loader - displays a loader if true
 * @param { Object } profileData.user - contains the API data ready to use
 * @param { Object.String } images - images paths
 * may contain an error Object
 *
 * @returns { React.Component }
 */

import { useContext } from 'react'
import PropTypes from 'prop-types'

import { ProfileContext } from '../../API/Profile'

import Macro from '../../components/Macro'
import Loader from '../../components/Loader'

import importAllImages from '../../assets/tools/importAllImages'

import APIMock from '../../API/Profile/mock/profile.json'
const { REACT_APP_API_MOCK } = process.env

function Macros() {
  const { profileData } = useContext(ProfileContext)

  let macrosData = {}
  if (Object.keys(profileData.user).length >= 1) {
    macrosData = REACT_APP_API_MOCK === 'true' ? APIMock.user.macros : profileData?.user.macros
  }

  const images = importAllImages(
    require.context('../../assets/images/icons/macros', false, /\.svg$/)
  )

  return (
    <>
      {profileData.loader || macrosData?.error ? (
        <Loader extraClasses="macros" />
      ) : (
        <div className="macros">
          {Object.keys(macrosData).map((macro) => (
            <Macro
              key={macro}
              category={macro}
              amount={macrosData[macro]}
              image={images[macro]}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Macros

Macros.propTypes = {
  macrosData: PropTypes.object,
}
