import htmlImg from '../../assets/images/html.png'
import cssImg from '../../assets/images/css.png'
import jsImg from '../../assets/images/js.png'
import reactImg from '../../assets/images/react.png'

export const createSkillsSection = () => {
  const section = document.createElement('section')
  section.id = 'skills'
  section.classList.add('skills')

  // Agregar el título antes del contenedor de habilidades
  const title = document.createElement('h2')
  title.textContent = 'HABILIDADES'
  section.appendChild(title)

  // Crear el contenedor de habilidades
  const skillsContainer = document.createElement('div')
  skillsContainer.classList.add('skills-container')

  // Lista de imágenes importadas
  const skillsImages = [htmlImg, cssImg, jsImg, reactImg]

  // Crear y añadir imágenes al contenedor
  skillsImages.forEach((url) => {
    const img = document.createElement('img')
    img.src = url
    img.alt = 'Habilidad'
    img.classList.add('skill-image')
    skillsContainer.appendChild(img)
  })

  // Añadir el contenedor de habilidades después del título
  section.appendChild(skillsContainer)

  return section
}
