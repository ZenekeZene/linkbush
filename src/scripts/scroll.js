const LIMIT_Y_IN_PIXELS = 60

function launchScrollDetection ({ callback }) {
  window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY
    const isLimit = scroll > LIMIT_Y_IN_PIXELS
    callback(isLimit)
  })
}

export default launchScrollDetection
