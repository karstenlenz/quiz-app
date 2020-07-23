import { get, getAll } from './util'
import { initializeBookmark } from './card'

export function initializeDarkMode() {
  // get elements
  const buttonDark = get('.darkmode')
  const styleSheet = get('.stylesheet')

  // add event listener
  buttonDark.addEventListener('click', () => {
    if (buttonDark.textContent === 'Dark Mode') {
      styleSheet.href = 'dark.css'
      buttonDark.textContent = 'Light Mode'
    } else {
      styleSheet.href = 'styles.css'
      buttonDark.textContent = 'Dark Mode'
    }
  })
}
