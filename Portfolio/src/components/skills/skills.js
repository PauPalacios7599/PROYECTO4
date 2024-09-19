export const createSkillsSection = () => {
  const section = document.createElement('section')
  section.id = 'skills'

  // Crear el contenedor de habilidades
  const skillsContainer = document.createElement('div')
  skillsContainer.classList.add('skills-container')

  // Lista de URLs de imágenes (con ruta desde la raíz del servidor)
  const skillsImages = [
    '/PROYECTO4/Portfolio/public/images/html.png',
    '/PROYECTO4/Portfolio/public/images/css.png',
    '/PROYECTO4/Portfolio/public/images/js.png',
    '/PROYECTO4/Portfolio/public/images/react.png'
  ]

  // Crear y añadir imágenes al contenedor
  skillsImages.forEach((url) => {
    const img = document.createElement('img')
    img.src = url
    img.alt = 'Habilidad' // Texto alternativo para accesibilidad
    img.classList.add('skill-image') // Puedes añadir una clase para estilos adicionales
    skillsContainer.appendChild(img)
  })

  // Añadir el título y el contenedor al section
  section.innerHTML = `
    <h2>HABILIDADES</h2>
  `
  section.appendChild(skillsContainer)
  section.classList.add('skills')

  return section
}
