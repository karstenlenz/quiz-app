//pages
const pageIndex = get('.page--index')
const pageBookmark = get('.page--bookmarks')
const pageCreate = get('.page--create')
const pageProfile = get('.page--profile')
const headline = get('h1')

// answer
const buttonAnswer = get('.card__button--answer1')
const answer = get('.card__answer1')

// forms
const inputsForm = getAll('textarea,input')
const form = get('.form')

// for darkmode
const buttonDark = get('.darkmode')
const styleSheet = get('.stylesheet')

// Navigation links
const navLinks = getAll('nav > div')
const navBookmark = get('.nav__bookmarks')
const navIndex = get('.nav__index')
const navCreate = get('.nav__create')
const navProfile = get('.nav__profile')

// bookmarks
const bookmarks = getAll('.card__bookmark')

// Add Event Listeners
navIndex.addEventListener('click', showPage(pageIndex, 'Quiz-App'))
navBookmark.addEventListener('click', showPage(pageBookmark, 'Bookmarks'))
navCreate.addEventListener('click', showPage(pageCreate, 'Create'))
navProfile.addEventListener('click', showPage(pageProfile, 'Profile'))

buttonDark.addEventListener('click', () => {
  if (buttonDark.textContent === 'Dark Mode') {
    styleSheet.href = 'dark.css'
    buttonDark.textContent = 'Light Mode'
  } else {
    styleSheet.href = 'styles.css'
    buttonDark.textContent = 'Dark Mode'
  }
})

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('d-none')
  if (buttonAnswer.textContent === 'Show answer') {
    buttonAnswer.textContent = 'Hide answer'
  } else {
    buttonAnswer.textContent = 'Show answer'
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  resetForm()
})

bookmarks.forEach((element) =>
  element.addEventListener('click', () => toggleBookmarkActive(element))
)

// functions

// form
function resetForm() {
  inputsForm.forEach((element) => (element.value = ''))
}

//Navigation functions
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

// bookmark toggle
function toggleBookmarkActive(element) {
  element.classList.toggle('card__bookmark--active')
  element.classList.toggle('card__bookmark--inactive')
}

// get functions
function get(selector) {
  return document.querySelector(selector)
}

function getAll(selector) {
  return document.querySelectorAll(selector)
}

//  function switchPage(pageName) {
//    return () => {
//      navLinks.forEach(
//        element.classList.add('d-none')
//        pageName.classList.remove('d-none')
//      )
//  }
//  }
