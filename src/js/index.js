import { initializeNav, showPage } from './navigation'
import { initializeCard, createCards } from './card'
import { initializeDarkMode } from './darkmode'
import { initializeForm } from './form'

createCards()
initializeNav()
initializeCard()
initializeDarkMode()
initializeForm()

export let state = {
  pageName: '',
  headline: '',
  icon: '',
}

function timeMachine(state) {
  showPage(state.pageName, state.headline, state.icon)
}

history.replaceState(state, null, '')
window.onpopstate = function (event) {
  if (event.state) {
    state = event.state
  }
  timeMachine(state) // See example render function in summary below
}
