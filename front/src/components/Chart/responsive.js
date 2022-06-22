/**
 * Makes Recharts components responsive in a grid when using fr units
 * 
 * @param { HTMLClassSelector } target - to identify which componenent we're watching 
 * @param { React.Function.StateHook.Setter } setWidth 
 * 
 * @returns { Number }
 */

function handleResize(target, setWidth) {
  const chartContainer = document.querySelector(target)
  const computedStyle = getComputedStyle(chartContainer)
  let chartWidth = chartContainer.clientWidth
  chartWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)
  setWidth(chartWidth)
}

export default handleResize
