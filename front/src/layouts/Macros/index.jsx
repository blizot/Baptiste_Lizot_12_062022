import { useContext } from 'react'

import { ProfileContext } from '../../API/Profile'

import Macro from '../../components/Macro'
import Loader from '../../components/Loader'

function Macros() {
  const { profileData, isProfileDataLoading: loader } =
    useContext(ProfileContext)
  
  let keyData = {}
  if (Object.keys(profileData).length >= 1) {
    keyData = profileData?.user?.data?.keyData
  }

  return (
    <>
      {loader ? (
        <Loader extraClasses="macros"/>
      ) : (
        <div className="macros">
          {Object.keys(keyData).map((element) => (
            <Macro
              key={element}
              category={element.replace('Count', '')}
              amount={keyData[element]}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Macros
