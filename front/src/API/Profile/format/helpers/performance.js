/**
 * Formats the performance data for the Profile API data formater
 * Links the value to its name
 * 
 * @param { Object } profileData - Data coming from the API
 * @param { Object } profileData.user-performance
 * 
 * @returns { Array.Object }
 */

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

export default formatPerformanceData
