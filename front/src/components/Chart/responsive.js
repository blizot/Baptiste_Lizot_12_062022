function handleResize(target, setWidth) {
  const chartContainer = document.querySelector(target)
  const computedStyle = getComputedStyle(chartContainer)
  let chartWidth = chartContainer.clientWidth
  chartWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)
  setWidth(chartWidth)
}

export default handleResize
