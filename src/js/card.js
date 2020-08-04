import { get, getAll, isElementInViewport } from './util'
import * as data from '../../data/content.json'

// get elements
export const cardContent = data.cardContent

const main = get('main')

export function createCards(content) {
  content.forEach(createCard)
}

export function createBookmarkedCards() {
  cardContent.filter((card) => card.isBookmarked).forEach(createCard)
}

export function createCard({
  question,
  answer,
  tags = [],
  isBookmarked = false,
}) {
  const card = document.createElement('section')
  card.className = 'card p-15 mb-40'
  card.innerHTML = /*html*/ `
<svg
    class="card__bookmark ${isBookmarked ? 'card__bookmark--active' : ''}"
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

<h2>Question</h2>
<p>
${question}
</p>
<button class="card__button--answer p-10">Show answer</button>
<p class ="card__answer d-none">${answer}</p>
<ul class="p-0 d-flex-wrap">

</ul>`
  main.appendChild(card)

  //create Tags
  const tagTarget = get('ul', card)
  tags.forEach((tag) => {
    const tagEl = document.createElement('li')
    tagTarget.appendChild(tagEl)
    tagEl.textContent = tag
  })

  addBookMarkListener(card)
  addAnswerListener(card)
  addFadeInListener(main)
  fadeInWhenInViewport(card)
  main.addEventListener('load', () => fadeInWhenInViewport(card))
  main.addEventListener('scroll', () => fadeInWhenInViewport(card))
}

function addAnswerListener(element) {
  const buttonAnswer = element.querySelector('.card__button--answer')
  const answer = element.querySelector('.card__answer')
  buttonAnswer.addEventListener('click', () => {
    answer.classList.toggle('d-none')
    if (buttonAnswer.textContent === 'Show answer') {
      buttonAnswer.textContent = 'Hide answer'
    } else {
      buttonAnswer.textContent = 'Show answer'
    }
  })
}

function addBookMarkListener(element) {
  const bookmark = element.querySelector('.card__bookmark')
  bookmark.addEventListener('click', () => toggleBookmarkActive(bookmark))
}

// bookmark toggle
function toggleBookmarkActive(element) {
  element.classList.toggle('card__bookmark--active')
}

function addFadeInListener(card) {
  card.addEventListener('load', () => fadeInWhenInViewport(card))
  card.addEventListener('scroll', () => fadeInWhenInViewport(card))
}

function fadeInWhenInViewport(card) {
  if (isElementInViewport(card)) {
    card.classList.add('card--fade-in')
  } else {
    card.classList.remove('card--fade-in')
  }
}
