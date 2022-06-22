/**
 * Makes a call to the API using fetch
 * 
 * @param { String } path - which path of the API to call
 * 
 * @returns { JSON }
 */

const { REACT_APP_API, REACT_APP_API_HOST } = process.env

async function client(path) {
  const response = await fetch(`${REACT_APP_API}${path}`, {
    method: 'GET',
    headers: {
      HOST: REACT_APP_API_HOST,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (response.ok) return response.json()
    return {error: response.status}
  })

  return response
}

export default client
