/**
 * Fetches all the images in a specific folder
 * 
 * @param { Webpack.context } context
 * presents as such: require.context(folderPath, useSubfoldersBoolean, regExp)
 * https://webpack.js.org/guides/dependency-management/#requirecontext
 * 
 * @returns { Object.String }
 */

function importAllImages(context) {
  const images = {}

  context.keys().forEach((item) => {
    // names the key as the file name
    images[item.replace('./', '').replace(/.(svg|jpg|jpeg|png)$/, '')] = context(item)
  })

  return images
}

export default importAllImages
