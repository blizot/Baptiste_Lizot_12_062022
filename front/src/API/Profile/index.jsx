import { useEffect, useState, createContext } from 'react'
import { useParams } from 'react-router-dom'

import client from '../client'
import pathsBuilder from '../pathsBuilder'

import formatProfileData from './format'

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
        paths.map((path) =>
          client(path).then((response) => [
            path.replace(/\//g, '').replace(/\d+/, '-').replace(/-$/, ''),
            response,
          ])
        )
      ).then((array) => setProfileData(Object.fromEntries(array)))
    } catch (error) {
      console.error(error)
    } finally {
      setProfileDataLoading(false)
    }
  }, [id])

  return { profileData, isProfileDataLoading }
}

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  const profileAPIData = ProfileAPI()
  const profileData = formatProfileData(profileAPIData)

  return (
    <ProfileContext.Provider value={{ profileData }}>
      {children}
    </ProfileContext.Provider>
  )
}
