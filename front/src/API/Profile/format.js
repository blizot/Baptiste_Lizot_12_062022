function formatMacrosData(profileData) {
  const formatedMacrosData = {}
  const macrosData = profileData?.user?.data.keyData

  Object.keys(macrosData).forEach(
    (key) => (formatedMacrosData[key.replace('Count', '')] = macrosData[key])
  )

  return formatedMacrosData
}

function formatActivityData(profileData) {
  const formatedActivityData = []
  const activityData = profileData?.['user-activity']?.data.sessions

  activityData.forEach((data) =>
    formatedActivityData.push({
      day: data.day,
      burntCalories: data.calories,
      weight: data.kilogram || data.pound,
    })
  )

  return formatedActivityData
}

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

function formatPerformanceData(profileData) {
  const formatedPerformanceData = []
  const performanceData = profileData?.['user-performance']?.data.data
  const performanceDataKind = profileData?.['user-performance']?.data.kind

  performanceData.forEach((data) =>
    formatedPerformanceData.push({
      value: data.value,
      kind: performanceDataKind[data.kind],
    })
  )

  // reversing the array to avoid dealing with Recharts' buggy Radar chart startAngle and endAngle
  return formatedPerformanceData.reverse()
}

function formatProfileData({ profileData, isProfileDataLoading }) {
  let formatedData = {
    loader: isProfileDataLoading,
    user: {}
  }

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
