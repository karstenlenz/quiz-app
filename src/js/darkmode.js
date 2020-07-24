import { get, getAll } from './util'

export function initializeDarkMode() {
  // get elements
  const buttonDark = get('.darkmode')
  const styleSheet = get('.stylesheet')
  const styleSheetURL = styleSheet.href

  // add event listener
  buttonDark.addEventListener('click', () => {
    if (buttonDark.textContent === 'Dark Mode') {
      styleSheet.href = 'dark.css'
      buttonDark.textContent = 'Light Mode'
    } else {
      styleSheet.href = styleSheetURL
      buttonDark.textContent = 'Dark Mode'
    }
  })
}
