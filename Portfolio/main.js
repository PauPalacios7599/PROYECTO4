import createHeader from './src/components/header/header.js'
import createProjectsSection from './src/components/projects/projects.js'
import createSkillsSection from './src/components/skills/skills.js'
import createAboutMeSection from './src/components/aboutme/aboutme.js'
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

// Diccionario de secciones
const pages = {
  aboutme: createAboutMeSection,
  projects: createProjectsSection,
  skills: createSkillsSection,
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

// Evento global para manejar clicks en botones con data-page
document.addEventListener('click', (e) => {
  if (e.target.matches('button[data-page]')) {
    const page = e.target.dataset.page
    console.log('✅ CLICK detectado en:', page)
    loadSection(page)

    document
      .querySelectorAll('.nav-links button')
      .forEach((btn) => btn.classList.remove('active'))

    if (e.target.closest('.nav-links')) {
      e.target.classList.add('active')
    }
  }
})

// Carga inicial
loadSection('aboutme')
