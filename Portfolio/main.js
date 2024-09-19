import { createHeader } from './src/components/header/header.js'
import { createProjectsSection } from './src/components/projects/projects.js'
import { createSkillsSection } from './src/components/skills/skills.js'
import { createAboutMeSection } from './src/components/aboutme/aboutme.js'
import { createContactSection } from './src/components/contact/contact.js'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(createHeader())
  document.body.appendChild(createProjectsSection())
  document.body.appendChild(createSkillsSection())
  document.body.appendChild(createAboutMeSection())
  document.body.appendChild(createContactSection())
})
