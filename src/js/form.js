import { get, getAll } from './util'

export function initializeForm() {
  // get elements
  const inputsForm = getAll('textarea,input')
  const form = get('.form')

  // add event listener
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.reset()
  })
}
