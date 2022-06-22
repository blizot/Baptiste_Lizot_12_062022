/**
 * Builds API paths
 * 
 * @param { String } zone - which main collection to fetch
 * @param { * } [data] - if need to call children collections
 * 
 * @returns { (String | Array)}
 */

function pathsBuilder({ zone, data }) {
  switch (zone) {
    case 'user':
      const { id, collections } = data
      const paths = []
      const base =  `/${zone}`

      collections.forEach(collection => {
        paths.push(`${base}/${id}/${collection}`)
      });

      return paths

    default:
      console.error('API/pathBuilder error')
      return 'API/pathsBuilder error'
  }
}

export default pathsBuilder
