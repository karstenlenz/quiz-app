import { getAll } from './util'

export function initializeCard() {
  // get elements
  const buttonsAnswer = getAll('.card__button--answer')
  const cards = getAll('.card')

  // add event listener
  cards.forEach((element) => {
    const bookmark = element.querySelector('.card__bookmark')
    bookmark.addEventListener('click', () => toggleBookmarkActive(bookmark))
    const buttonAnswer = element.querySelector('.card__button--answer')
    buttonAnswer.addEventListener('click', () => {
      const answer = element.querySelector('.card__answer')
      answer.classList.toggle('d-none')
      if (buttonAnswer.textContent === 'Show answer') {
        buttonAnswer.textContent = 'Hide answer'
      } else {
        buttonAnswer.textContent = 'Show answer'
      }
    })
  })

  // bookmark toggle
  function toggleBookmarkActive(element) {
    element.classList.toggle('card__bookmark--active')
    element.classList.toggle('card__bookmark--inactive')
  }
}
