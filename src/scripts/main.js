import launchScrollDetection from './scroll'
import launchGesture from './gesture'
import initModal from './modal'

let isScrolled = false
let element

launchScrollDetection({ callback: (value) => {
  if (!element) return
  isScrolled = value
  isScrolled ? element.classList.add('visible') : element.classList.remove('visible')
}})

document.addEventListener("DOMContentLoaded", () => {
  element = document.getElementById('avatar-compressed')
})

launchGesture()
initModal()
