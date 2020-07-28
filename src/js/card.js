import { get, getAll, isElementInViewport } from './util'
import * as data from '../../data/content.json'

const cardContent = data.cardContent

export function createCards() {
  const main = get('main')

  cardContent.forEach(createCard)

  function createCard({ question, answer, tags }) {
    const card = document.createElement('section')
    card.className = 'card p-15 mb-40'
    card.innerHTML = /*html*/ `
    <a href="#"
    ><svg
      class="card__bookmark card__bookmark--active"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-bookmark"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  </a>
  <h2>Question</h2>
  <p>
  ${question}
  </p>
  <button class="card__button--answer p-10">Show answer</button>
  <p class ="card__answer d-none">${answer}</p>
  <ul class="p-0 d-flex-wrap">
 
  </ul>  
    `
    main.appendChild(card)

    //create Tags
    const tagTarget = get('ul', card)
    tags.forEach((tag) => {
      const tagEl = document.createElement('li')
      tagTarget.appendChild(tagEl)
      tagEl.textContent = tag
    })
  }
}

export function initializeCard() {
  // get elements
  const buttonsAnswer = getAll('.card__button--answer')
  const cards = getAll('.card')
  const mains = getAll('main')

  // to show cards before first scroll
  fadeInWhenInViewport()

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

  function fadeInWhenInViewport() {
    cards.forEach((card) => {
      if (isElementInViewport(card)) {
        card.classList.add('card--fade-in')
      } else {
        card.classList.remove('card--fade-in')
      }
    })
  }

  mains.forEach((el) => {
    el.addEventListener('load', fadeInWhenInViewport)
    el.addEventListener('scroll', fadeInWhenInViewport)
  })
}
