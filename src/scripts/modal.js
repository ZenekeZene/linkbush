function handleModal () {
  const modal = document.getElementById('modal')
  const triggers = document.querySelectorAll('.modal-trigger')
  const body = document.body

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (event) => {
      event.stopPropagation()
      if (modal.classList.contains('visible')) {
        modal.classList.remove('visible')
        body.classList.remove('modal-open')
      } else {
        modal.classList.add('visible')
        body.classList.add('modal-open')
      }
    })
  })
}

function initModal () {
  document.addEventListener("DOMContentLoaded", handleModal)
}

export default initModal
