/**
 * Calls the API to fill the Profile page
 * Creates a Context Provider to use on child React components
 * 
 * @returns { React.Context.Provider }
 */

import { useEffect, useState, createContext } from 'react'
import { useParams } from 'react-router-dom'

import client from '../client'
import pathsBuilder from '../pathsBuilder'

import formatProfileData from './format/format'

function ProfileAPI() {
  const [profileData, setProfileData] = useState({})
  const [isProfileDataLoading, setProfileDataLoading] = useState(false)

  const id = useParams().id

  useEffect(() => {
    // creates all the API paths the Profile page needs
    const collections = ['', 'activity', 'average-sessions', 'performance']
    const paths = pathsBuilder({ zone: 'user', data: { id, collections } })

    try {
      setProfileDataLoading(true)

      // call all of the API paths
      Promise.all(
        paths.map((path) =>
          client(path).then((response) => [
            // clears the path names to simplify the key names
            path.replace(/\//g, '').replace(/\d+/, '-').replace(/-$/, ''),
            response,
          ])
        ) // generates the response object with the data from each call
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
