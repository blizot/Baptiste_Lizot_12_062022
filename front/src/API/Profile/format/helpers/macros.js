/**
 * Formats the macros data for the Profile API data formater
 * Renames keys for an easier use in the component
 * 
 * @param { Object } profileData - Data coming from the API
 * @param { Object } profileData.user
 * 
 * @returns { Object }
 */

function formatMacrosData(profileData) {
  const formatedMacrosData = {}
  const macrosData = profileData?.user?.data?.keyData || profileData.user

  if (macrosData?.error) return macrosData

  Object.keys(macrosData).forEach(
    (key) => (formatedMacrosData[key.replace('Count', '')] = macrosData[key])
  )

  return formatedMacrosData
}

export default formatMacrosData
