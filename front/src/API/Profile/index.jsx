import { useEffect, useState, createContext } from 'react'
import { useParams } from 'react-router-dom'

import client from '../client'
import pathsBuilder from '../pathsBuilder'

function ProfileAPI() {
  const [profileData, setProfileData] = useState({})
  const [isProfileDataLoading, setProfileDataLoading] = useState(false)

  const id = useParams().id
  
  useEffect(() => {
    const collections = ['', 'activity', 'average-sessions', 'performance']
    const paths = pathsBuilder({ zone: 'user', data: { id, collections } })

    try {
      setProfileDataLoading(true)

      Promise.all(
        paths.map((path) => client(path)
          .then((response) => [
            path.replace(/\//g, '').replace(/\d+/, '-').replace(/-$/, ''),
            response,
          ])
        )
      ).then((array) => setProfileData(Object.fromEntries(array)))
    } catch (error) {
      console.log(error)
    } finally {
      setProfileDataLoading(false)
    }
  }, [id])

  return { profileData, isProfileDataLoading }
}

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  const profileAPI = ProfileAPI()
  console.log(profileAPI) //! TO DELETE

  return (
    <ProfileContext.Provider value={profileAPI}>
      {children}
    </ProfileContext.Provider>
  )
}
