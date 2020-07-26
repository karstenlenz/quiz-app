import { get, getAll, isElementInViewport } from './util'

export function initializeCard() {
  // get elements
  const buttonsAnswer = getAll('.card__button--answer')
  const cards = getAll('.card')
  const mains = getAll('main')

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

  function fadeInOnScroll() {
    cards.forEach((card) => {
      if (isElementInViewport(card)) {
        card.classList.add('card--fade-in')
      } else {
        card.classList.remove('card--fade-in')
      }
    })
  }

  mains.forEach((el) => {
    el.addEventListener('load', fadeInOnScroll)
    el.addEventListener('scroll', fadeInOnScroll)
  })
}
