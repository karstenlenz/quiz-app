import { state } from './index'
import { get, getAll } from './util'
import {
  createCards,
  createCardsAndFilter,
  cardContent,
  createBookmarkedCards,
} from './card'
import { initCreate } from './create'
import { initProfile } from './profile'
import { initForm } from './form'
import { Filter } from './filter'

const headline = get('h1')
// Pages

// Navigation links

const navBookmarks = get('[data-js="navBookmarks"')
const navIndex = get('[data-js="navIndex"')
const navCreate = get('[data-js="navCreate"')
const navProfile = get('[data-js="navProfile"')

const iconsFooter = getAll('.footer__icon')
export const main = get('main')

export function render(pageName, icon = navIndex) {
  clearContent()
  iconsFooter.forEach((el) => el.classList.remove('footer__icon--active'))
  icon.querySelector('.footer__icon').classList.add('footer__icon--active')
  switch (pageName) {
    case 'pageIndex':
      Filter()
      createCards(cardContent)
      changeHeadline('Quiz-App')
      break
    case 'pageBookmarks':
      createBookmarkedCards()
      changeHeadline('Bookmarks')
      break
    case 'pageCreate':
      initCreate()
      changeHeadline('Create')
      break
    case 'pageProfile':
      initProfile()
      changeHeadline('Profile')
      break
  }
  let historyState = { pageName: pageName }
  window.history.pushState(historyState, null, `${pageName}.html`)
}

export function clearContent() {
  const main = get('main')
  main.innerHTML = ''
}

function changeHeadline(string) {
  headline.textContent = string
}

export function initializeNav() {
  // Add Event Listeners
  navIndex.addEventListener('click', () => render('pageIndex', navIndex))
  navBookmarks.addEventListener('click', () =>
    render('pageBookmarks', navBookmarks)
  )
  navCreate.addEventListener('click', () => render('pageCreate', navCreate))
  navProfile.addEventListener('click', () => render('pageProfile', navProfile))
}
