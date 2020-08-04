import { initializeNav, showPage, render } from './navigation'
import { initializeCard, createCards, cardContent } from './card'
import { initializeDarkMode } from './darkmode'
import { initializeForm } from './form'
import { Filter } from './filter'

Filter()
createCards(cardContent)
initializeNav()

//initializeForm()

history.replaceState(null, null, '')
window.onpopstate = function (event) {
  if (event.state != null) {
    let state = { pageName: '', icon: '' }
    state.pageName = event.state.pageName
    state.icon = event.state.icon
    render(state.pageName, state.icon)
  }
}

// export function timeMachine(state) {
//   console.log('state ' + state.pageName + ' ' + state.icon)
//   render(state.pageName, state.icon)
// }
