import { get } from './util'
import { initForm } from './form'

export function initCreate() {
  const main = get('main')
  main.className = 'p-15 page--create'
  main.innerHTML = /*html*/ `    <form action="" class="form">
  <div class="form__input-wrapper d-flex-wrap mb-40">
    <label for="question" class="form__label">Question</label>
    <textarea
      name="question"
      id="question"
      cols="30"
      rows="10"
      placeholder="What do you want to ask?"
      class="form__textarea p-10"
    ></textarea>
  </div>
  <div class="form__input-wrapper d-flex-wrap mb-40">
    <label for="answer" class="form__label">Answer</label>
    <textarea
      name="answer"
      id="answer"
      cols="30"
      rows="10"
      placeholder="What's the answer?"
      class="form__textarea p-10"
    ></textarea>
  </div>
  <div class="form__input-wrapper d-flex-wrap mb-40">
    <label for="tags" class="form__label">Tags</label>
    <input
      id="tags"
      type="text"
      placeholder="tag1,tag2,tag3"
      class="form__input--text p-10"
    />
  </div>
  <button class="form__button p-10 mb-40">Submit</button>
</form>
`

  initForm()
}
