import htmlImg from '../../assets/images/html.png'
import cssImg from '../../assets/images/css.png'
import jsImg from '../../assets/images/js.png'
import reactImg from '../../assets/images/react.png'

export const createSkillsSection = () => {
  const section = document.createElement('section')
  section.id = 'skills'
  section.classList.add('skills')

  const title = document.createElement('h2')
  title.textContent = 'HABILIDADES'
  section.appendChild(title)

  const skillsContainer = document.createElement('div')
  skillsContainer.classList.add('skills-container')

  const skillsImages = [htmlImg, cssImg, jsImg, reactImg]

  skillsImages.forEach((url) => {
    const img = document.createElement('img')
    img.src = url
    img.alt = 'Habilidad'
    img.classList.add('skill-image')
    skillsContainer.appendChild(img)
  })

  section.appendChild(skillsContainer)

  return section
}
export default createSkillsSection
