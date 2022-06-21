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
