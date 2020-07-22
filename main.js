const bookmarks = document.querySelectorAll('.card__bookmark')
console.log(bookmarks)
function toggleBookmarkActive(element) {
  element.classList.toggle('card__bookmark--active')
  element.classList.toggle('card__bookmark--inactive')
}
bookmarks.forEach((element) =>
  element.addEventListener('click', () => toggleBookmarkActive(element))
)
