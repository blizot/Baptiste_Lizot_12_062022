const { REACT_APP_API, REACT_APP_API_HOST } = process.env

async function client(path) {
  const response = await fetch(`${REACT_APP_API}${path}`, {
    method: 'GET',
    headers: {
      HOST: REACT_APP_API_HOST,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  const responseJSON = await response.json()
  return responseJSON
}

export default client
