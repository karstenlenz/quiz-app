export const main = get('main')

export function get(selector, target = document) {
  return target.querySelector(selector)
}

export function getAll(selector, target = document) {
  return target.querySelectorAll(selector)
}

export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    // rect.top >= 0 &&
    rect.top + 150 <=
    (window.innerHeight || document.documentElement.clientHeight)
  )
}

export function createElement(type, className, target = main) {
  const el = document.createElement(type)
  el.className = className
  target.appendChild(el)
  return el
}
