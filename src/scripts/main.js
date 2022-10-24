import launchScrollDetection from './scroll'

let isScrolled = false
let element

launchScrollDetection({ callback: (value) => {
  if (!element) return
  isScrolled = value
  console.log('callback', isScrolled)
  isScrolled ? element.classList.add('visible') : element.classList.remove('visible')
}})

document.addEventListener("DOMContentLoaded", (event) => {
  element = document.getElementById('avatar-compressed')
})
