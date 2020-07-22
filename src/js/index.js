const pageIndex = get('.page--index')
const pageBookmark = get('.page--bookmarks')
const pageCreate = get('.page--create')
const pageProfile = get('.page--profile')
const headline = get('h1')

const buttonAnswer = get('.card__button--answer1')
const answer = get('.card__answer1')

// forms
const inputsForm = getAll('textarea,input')
const form = get('.form')

const buttonDark = get('.darkmode')
const styleSheet = get('.stylesheet')

// Navigation links
const navLinks = getAll('nav > div')
const navBookmark = get('.nav__bookmarks')
const navIndex = get('.nav__index')
const navCreate = get('.nav__create')
const navProfile = get('.nav__profile')

const bookmarks = getAll('.card__bookmark')

// Add Event Listeners
navIndex.addEventListener('click', showPage(pageIndex, 'Quiz-App'))
navBookmark.addEventListener('click', showPage(pageBookmark, 'Bookmarks'))
navCreate.addEventListener('click', showPage(pageCreate, 'Create'))
navProfile.addEventListener('click', showPage(pageProfile, 'Profile'))

buttonDark.addEventListener('click', () => (styleSheet.href = 'dark.css'))

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('d-none')
  if (buttonAnswer.textContent === 'Show answer') {
    buttonAnswer.textContent = 'Hide answer'
  } else {
    buttonAnswer.textContent = 'Show answer'
  }
})

bookmarks.forEach((element) =>
  element.addEventListener('click', () => toggleBookmarkActive(element))
)

form.addEventListener('submit', (event) => {
  event.preventDefault()
  resetForm()
})

// functions

function resetForm() {
  inputsForm.forEach((element) => (element.value = ''))
}
function showPage(pageName, headline) {
  return () => {
    hideAllPages()
    pageName.classList.remove('d-none')
    changeHeadline(headline)
  }
}

function changeHeadline(string) {
  headline.textContent = string
}

function hideAllPages() {
  pageIndex.classList.add('d-none')
  pageBookmark.classList.add('d-none')
  pageCreate.classList.add('d-none')
  pageProfile.classList.add('d-none')
}

function get(selector) {
  return document.querySelector(selector)
}

function getAll(selector) {
  return document.querySelectorAll(selector)
}

function toggleBookmarkActive(element) {
  element.classList.toggle('card__bookmark__active')
  element.classList.toggle('card__bookmark--inactive')
}

//  function switchPage(pageName) {
//    return () => {
//      navLinks.forEach(
//        element.classList.add('d-none')
//        pageName.classList.remove('d-none')
//      )
//  }
//  }
