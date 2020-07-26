// get functions
export function get(selector) {
  return document.querySelector(selector)
}

export function getAll(selector) {
  return document.querySelectorAll(selector)
}

export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    // rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom + 0 <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
