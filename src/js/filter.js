import { createElement, main } from './util'
import { clearContent } from './navigation'
import { cardContent, createCard } from './card'

export function Filter() {
  const form = createElement('form')
  const input = createElement('input', 'filter__input p-10 mb-15')
  input.placeholder = 'Filter nach Tags, z.B. CSS'
  form.appendChild(input)
  const button = createElement('button', 'filter__button p-10 mb-30')
  button.textContent = 'Filtern'
  form.appendChild(button)

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const keyword = input.value
    filterCards(keyword)
    console.log(keyword)
    form.reset()
  })
}

export function filterCards(keyword) {
  if (keyword !== '') {
    clearContent()
    Filter()
    const filteredContent = cardContent.filter((card) => {
      return card.tags.includes(keyword.trim())
    })
    console.log('filteredcontent = ' + filteredContent)
    filteredContent.forEach(createCard)
    if (filteredContent.length === 0) {
      const errorMessage = createElement('h2', '', main)
      errorMessage.textContent = `Es gibt keine Karte mit dem Tag "${keyword}". Tipp: Achte auf Groß- und Kleinschreibung und Leerzeichen.`
    }
  }
}
