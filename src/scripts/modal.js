function handleModal () {
  const modal = document.getElementById('modal')
  const triggers = document.querySelectorAll('.modal-trigger')

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (event) => {
      event.stopPropagation()
      if (modal.classList.contains('visible')) {
        modal.classList.remove('visible')
      } else {
        modal.classList.add('visible')
      }
    })
  })
}

function initModal () {
  document.addEventListener("DOMContentLoaded", handleModal)
}

export default initModal
