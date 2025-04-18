import createHeader from './src/components/header/header.js'
import createProjectsSection from './src/components/projects/projects.js'
import createSkillsSection from './src/components/skills/skills.js'
import createAboutMeSection from './src/components/aboutme/aboutme.js'
import createContactSection from './src/components/contact/contact.js'
import createExperienceSection from './src/components/experience/experience.js'

console.log('✅ main.js cargado')

const app = document.getElementById('app')

// Crear y montar header y main
const header = createHeader()
console.log('🧪 Header generado por JS:')
console.log(header.outerHTML)

app.appendChild(header)
const main = document.createElement('main')
main.id = 'main-content'
app.appendChild(main)

// 🔥 Enganchar evento justo después de añadir el header al DOM
const nav = header.querySelector('.nav-links')
console.log('🧪 nav:', nav)

if (nav) {
  nav.addEventListener('click', (e) => {
    if (e.target.matches('button[data-page]')) {
      const page = e.target.dataset.page
      console.log('✅ CLICK detectado en:', page)
      loadSection(page)

      nav
        .querySelectorAll('button')
        .forEach((btn) => btn.classList.remove('active'))
      e.target.classList.add('active')
    }
  })
} else {
  console.warn('❌ .nav-links no encontrado en el header')
}

// Diccionario de secciones
const pages = {
  aboutme: createAboutMeSection,
  projects: createProjectsSection,
  skills: createSkillsSection,
  contact: createContactSection,
  experience: createExperienceSection
}

// Cargar sección
const loadSection = (key) => {
  main.innerHTML = ''
  if (pages[key]) {
    const section = pages[key]()
    main.appendChild(section)
  } else {
    main.innerHTML = '<p>Sección no encontrada</p>'
  }
}

// Carga inicial
loadSection('aboutme')
