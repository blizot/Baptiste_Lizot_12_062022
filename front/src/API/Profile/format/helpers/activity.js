/**
 * Formats the activity data for the Profile API data formater
 * Renames keys for more specific and generic names
 * 
 * @param { Object } profileData - Data coming from the API
 * @param { Object } profileData.user-activity
 * 
 * @returns { Array.Object }
 */

function formatActivityData(profileData) {
  const formatedActivityData = []
  const activityData = profileData?.['user-activity']?.data?.sessions || profileData['user-activity']

  if (activityData?.error) return activityData

  activityData.forEach((data) =>
    formatedActivityData.push({
      day: data.day,
      burntCalories: data.calories,
      weight: data.kilogram || data.pound,
    })
  )

  return formatedActivityData
}

export default formatActivityData
