import { get, getAll } from './util'

export function initializeCard() {
  // get elements
  const bookmarks = getAll('.card__bookmark')
  const buttonAnswer = get('.card__button--answer1')
  const answer = get('.card__answer1')

  // add event listener
  bookmarks.forEach((element) =>
    element.addEventListener('click', () => toggleBookmarkActive(element))
  )

  // bookmark toggle
  function toggleBookmarkActive(element) {
    element.classList.toggle('card__bookmark--active')
    element.classList.toggle('card__bookmark--inactive')
  }

  // answer toggle
  buttonAnswer.addEventListener('click', () => {
    answer.classList.toggle('d-none')
    if (buttonAnswer.textContent === 'Show answer') {
      buttonAnswer.textContent = 'Hide answer'
    } else {
      buttonAnswer.textContent = 'Show answer'
    }
  })
}
