const aboutMeContent = {
  experiencia:
    'La experiencia que tengo ahora mismo es la de los proyectos que se pueden ver arriba. No hay mucha pero la hay.',
  educacion: 'Actualmente me estoy formando en ThePowerEducation.'
}

export const createAboutMeSection = () => {
  const section = document.createElement('section')
  section.id = 'aboutme'
  section.innerHTML = `
    <h2>SOBRE MÍ</h2>
    <div id="aboutme-content" class="aboutme-content">
      <!-- Contenido dinámico añadido aquí -->
    </div>
  `
  section.classList.add('aboutme')

  const aboutMeContainer = section.querySelector('#aboutme-content')
  const createCard = (title, content) => {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    const cardTitle = document.createElement('h3')
    cardTitle.textContent = title

    const cardContent = document.createElement('p')
    cardContent.textContent = content

    cardDiv.appendChild(cardTitle)
    cardDiv.appendChild(cardContent)

    return cardDiv
  }

  aboutMeContainer.appendChild(
    createCard('Experiencia', aboutMeContent.experiencia)
  )
  aboutMeContainer.appendChild(
    createCard('Educación', aboutMeContent.educacion)
  )

  return section
}
