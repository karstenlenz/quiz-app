import { get } from './util'
import { initDarkMode } from './darkmode'

export function initProfile() {
  const main = get('main')
  main.className = 'profile p-15 d-flex-wrap page--profile'
  main.innerHTML = /*html*/ `<img
src="https://source.unsplash.com/collection/1953210/200x200"
alt="Profile picture"
class="profile__picture mw-50"
/>
<h2 class="profile__user-name">karstenlenz123</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
hic totam dolores voluptas eligendi magnam debitis possimus laboriosam
vel repellendus odio, maxime molestiae id consequuntur exercitationem
eveniet reiciendis pariatur autem?
</p>
<div class="w-100">
<h2>Skills</h2>
<ul class="p-0 d-flex-wrap">
  <li class>Skill1</li>
  <li class>Skill2</li>
  <li class>Skill3</li>
  <li class>Skill4</li>
</ul>
</div>
<button class="p-10 mb-40 darkmode">Dark Mode</button>
<button class="p-10 mb-40">Logout</button>
`

  initDarkMode()
}
