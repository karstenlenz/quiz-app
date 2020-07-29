import { state } from './index'
import { get, getAll } from './util'
import { createCards } from './card'
import { initCreate } from './create'
import { initProfile } from './profile'
import { initForm } from './form'

const headline = get('h1')
// Pages

// Navigation links

const navBookmarks = get('[data-js="navBookmarks"')
const navIndex = get('[data-js="navIndex"')
const navCreate = get('[data-js="navCreate"')
const navProfile = get('[data-js="navProfile"')

const iconsFooter = getAll('.footer__icon')
const main = get('main')

// export function showPage(pageName, headline, icon) {
//   return () => {
//     hideAllPages()
//     pageName.classList.remove('d-none')
//     changeHeadline(headline)
//     iconsFooter.forEach((el) => el.classList.remove('footer__icon--active'))
//     icon.querySelector('.footer__icon').classList.add('footer__icon--active')
//     state.pageName = pageName
//     state.headline = headline
//     state.icon = icon
//     history.pushState(null, null, `${headline}.html`)
//     console.log(state)
//   }
// }

export function render(pageName, icon) {
  main.innerHTML = ''
  iconsFooter.forEach((el) => el.classList.remove('footer__icon--active'))
  icon.querySelector('.footer__icon').classList.add('footer__icon--active')
  switch (pageName) {
    case 'pageIndex':
      createCards()
      changeHeadline('Quiz-App')
      break
    case 'pageBookmarks':
      createCards()
      changeHeadline('Bookmarks')
      break
    case 'pageCreate':
      initCreate()
      initForm()
      changeHeadline('Create')
      break
    case 'pageProfile':
      initProfile()
      changeHeadline('Profile')
      break
  }
  state.pageName = pageName
  state.headline = headline
  state.icon = icon
  history.pushState(null, null, `${pageName}.html`)
}

function hideAllPages() {
  const main = get('main')
  main.innerHTML = ''
}

function changeHeadline(string) {
  headline.textContent = string
}

// export function initializeNav() {
//   // Add Event Listeners
//   navIndex.addEventListener('click', showPage(pageIndex, 'Quiz-App', navIndex))
//   navBookmarks.addEventListener(
//     'click',
//     showPage(pageBookmarks, 'Bookmarks', navBookmarks)
//   )
//   navCreate.addEventListener('click', showPage(pageCreate, 'Create', navCreate))
//   navProfile.addEventListener(
//     'click',
//     showPage(pageProfile, 'Profile', navProfile)
//   )

export function initializeNav() {
  // Add Event Listeners
  navIndex.addEventListener('click', () => render('pageIndex', navIndex))
  navBookmarks.addEventListener('click', () =>
    render('pageBookmarks', navBookmarks)
  )
  navCreate.addEventListener('click', () => render('pageCreate', navCreate))
  navProfile.addEventListener('click', () => render('pageProfile', navProfile))
}
