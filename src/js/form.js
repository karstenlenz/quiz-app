import { get, getAll } from './util'
import { cardContent } from './card'

export function initForm() {
  // get elements
  const form = get('.form')

  // add event listener
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const { question, answer, tags } = form
    cardContent.push({
      question: question.value,
      answer: answer.value,
      tags: tags.value.split(',').map((tag) => tag.trim()),
    })
    console.log('card created')
    form.reset()
  })
}
