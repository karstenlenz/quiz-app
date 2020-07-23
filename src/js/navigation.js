import { get, getAll } from './util'

export function initializeNav() {
  // Pages
  const pageIndex = get('.page--index')
  const pageBookmark = get('.page--bookmarks')
  const pageCreate = get('.page--create')
  const pageProfile = get('.page--profile')
  const headline = get('h1')

  // Navigation links
  const navLinks = getAll('nav > div')
  const navBookmark = get('.nav__bookmarks')
  const navIndex = get('.nav__index')
  const navCreate = get('.nav__create')
  const navProfile = get('.nav__profile')

  const iconsFooter = getAll('.footer__icon')

  // Add Event Listeners
  navIndex.addEventListener('click', showPage(pageIndex, 'Quiz-App', navIndex))
  navBookmark.addEventListener(
    'click',
    showPage(pageBookmark, 'Bookmarks', navBookmark)
  )
  navCreate.addEventListener('click', showPage(pageCreate, 'Create', navCreate))
  navProfile.addEventListener(
    'click',
    showPage(pageProfile, 'Profile', navProfile)
  )

  //Navigation functions
  function showPage(pageName, headline, icon) {
    return () => {
      hideAllPages()
      pageName.classList.remove('d-none')
      changeHeadline(headline)
      iconsFooter.forEach((el) => el.classList.remove('footer__icon--active'))
      icon.querySelector('.footer__icon').classList.add('footer__icon--active')
    }
  }

  function changeHeadline(string) {
    headline.textContent = string
  }

  function hideAllPages() {
    const pages = document.querySelectorAll('main')
    pages.forEach((page) => page.classList.add('d-none'))
  }

  // functions

  //  function switchPage(pageName) {
  //    return () => {
  //      navLinks.forEach(
  //        element.classList.add('d-none')
  //        pageName.classList.remove('d-none')
  //      )
  //  }
  //  }
}
