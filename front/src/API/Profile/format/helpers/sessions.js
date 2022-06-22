/**
 * Formats the average sessions data for the Profile API data formater
 * Assigns the name of the day to its number
 * 
 * @param { Object } profileData - Data coming from the API
 * @param { Object } profileData.user-average-sessions
 * 
 * @returns { Array.Object }
 */

function formatAverageSessionsData(profileData) {
  const formatedAverageSessionsData = []
  const averageSessionsData = profileData?.['user-average-sessions']?.data?.sessions
  const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  averageSessionsData.forEach((data) =>
    formatedAverageSessionsData.push({
      sessionLength: data.sessionLength,
      weekDay: weekDay[data.day - 1],
    })
  )

  return formatedAverageSessionsData
}

export default formatAverageSessionsData
