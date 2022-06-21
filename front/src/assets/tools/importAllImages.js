function importAllImages(context) {
  const images = {}

  context.keys().forEach((item) => {
    images[item.replace('./', '').replace('.svg', '')] = context(item)
  })

  return images
}

export default importAllImages
