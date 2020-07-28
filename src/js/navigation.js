import { state } from './index'
import { get, getAll } from './util'

const headline = get('h1')
// Pages
const pageIndex = get('[data-js="pageIndex"')
const pageBookmarks = get('[data-js="pageBookmarks"')
const pageCreate = get('[data-js="pageCreate"')
const pageProfile = get('[data-js="pageProfile"')

// Navigation links

const navBookmarks = get('[data-js="navBookmarks"')
const navIndex = get('[data-js="navIndex"')
const navCreate = get('[data-js="navCreate"')
const navProfile = get('[data-js="navProfile"')

const iconsFooter = getAll('.footer__icon')

export function showPage(pageName, headline, icon) {
  return () => {
    hideAllPages()
    pageName.classList.remove('d-none')
    changeHeadline(headline)
    iconsFooter.forEach((el) => el.classList.remove('footer__icon--active'))
    icon.querySelector('.footer__icon').classList.add('footer__icon--active')
    state.pageName = pageName
    state.headline = headline
    state.icon = icon
    history.pushState(null, null, `${headline}.html`)
    console.log(state)
  }
}

export function render(pageName) {
  switch (pageName) {
    case 'pageIndex':
      console.log('index')
      break
    case 'pageBookmarks':
      console.log('bookmarks')
      break
    case 'pageCreate':
      console.log('create')
      break
    case 'pageProfile':
      console.log('profile')
      break
  }
}

function hideAllPages() {
  const pages = document.querySelectorAll('main')
  pages.forEach((page) => page.classList.add('d-none'))
}

function changeHeadline(string) {
  headline.textContent = string
}

export function initializeNav() {
  // Add Event Listeners
  navIndex.addEventListener('click', showPage(pageIndex, 'Quiz-App', navIndex))
  navBookmarks.addEventListener(
    'click',
    showPage(pageBookmarks, 'Bookmarks', navBookmarks)
  )
  navCreate.addEventListener('click', showPage(pageCreate, 'Create', navCreate))
  navProfile.addEventListener(
    'click',
    showPage(pageProfile, 'Profile', navProfile)
  )
}
