/**
 * Profile API data formater
 * Formats the output of the API so the data is easily used in Profile's components
 * 
 * @param { Object } profileData - Data coming from the API
 * @param { Object } profileData.user
 * @param { Object } profileData.user-activity
 * @param { Object } profileData.user-average-sessions
 * @param { Object } profileData.user-performance
 * @param { Boolean } isProfileDataLoading
 * 
 * @returns { Object.<Boolean|Object.<String|Float|Array|Object>> }
 */

import formatMacrosData from './helpers/macros'
import formatActivityData from './helpers/activity'
import formatAverageSessionsData from './helpers/sessions'
import formatPerformanceData from './helpers/performance'

function formatProfileData({ profileData, isProfileDataLoading }) {
  let formatedData = {
    loader: isProfileDataLoading,
    user: {}
  }

  // if the API responds with data, then fill the user key
  if (Object.keys(profileData).length >= 1) {
    formatedData.user = {
      name: profileData?.user?.data.userInfos.firstName,
      macros: formatMacrosData(profileData),
      score: profileData?.user?.data?.score || profileData?.user?.data.todayScore,
      activity: formatActivityData(profileData),
      averageSessions: formatAverageSessionsData(profileData),
      performance: formatPerformanceData(profileData),
    }
  }

  return formatedData
}

export default formatProfileData
