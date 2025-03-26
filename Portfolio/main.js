import { createHeader } from './src/components/header/header.js'
import { createProjectsSection } from './src/components/projects/projects.js'
import { createSkillsSection } from './src/components/skills/skills.js'
import { createAboutMeSection } from './src/components/aboutme/aboutme.js'
import { createContactSection } from './src/components/contact/contact.js'

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header')
  if (headerContainer) {
    headerContainer.replaceWith(createHeader())
  } else {
    document.body.prepend(createHeader())
  }

  document.getElementById('projects').appendChild(createProjectsSection())
  document.getElementById('skills').appendChild(createSkillsSection())
  document.getElementById('aboutme').appendChild(createAboutMeSection())
  document.getElementById('contact').appendChild(createContactSection())
})
