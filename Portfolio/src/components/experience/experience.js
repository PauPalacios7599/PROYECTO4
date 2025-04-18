const createExperienceSection = () => {
  const section = document.createElement('section')
  section.id = 'experience'
  section.classList.add('experience-section')

  section.innerHTML = `
    <h2>Experiencia, Estudios y Habilidades</h2>
    <div class="tabs">
      <button class="tab-button active" data-tab="exp">Experiencia</button>
      <button class="tab-button" data-tab="edu">Estudios</button>
      <button class="tab-button" data-tab="skills">Habilidades</button>
    </div>

    <div class="tab-content-container">
      <div id="exp" class="tab-content active">
        <ul>
          <li>Electricista (2022 - Presente)</li>
          <li>Colaboraciones en proyectos web personales</li>
        </ul>
      </div>
      <div id="edu" class="tab-content">
        <ul>
          <li>Grado Superior de Deportes</li>
          <li>Curso de Desarrollo Web - ThePower Education</li>
        </ul>
      </div>
      <div id="skills" class="tab-content">
        <ul class="skills-list">
          <li class="skill-item">
            <img src="./src/assets/images/html.png" alt="HTML" />
            <span>HTML</span>
          </li>
          <li class="skill-item">
            <img src="./src/assets/images/css.png" alt="CSS" />
            <span>CSS</span>
          </li>
          <li class="skill-item">
            <img src="./src/assets/images/js.png" alt="JavaScript" />
            <span>JavaScript</span>
          </li>
          <li class="skill-item">
            <img src="./src/assets/images/react.png" alt="React" />
            <span>React</span>
          </li>
          <li class="skill-item">
            <img src="./src/assets/images/node.png" alt="Node" />
            <span>Node.JS</span>
          </li>
        </ul>
      </div>
    </div>
  `

  setupTabs(section)
  return section
}

const setupTabs = (container) => {
  const buttons = container.querySelectorAll('.tab-button')
  const contents = container.querySelectorAll('.tab-content')

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'))
      contents.forEach((c) => c.classList.remove('active'))

      btn.classList.add('active')
      const id = btn.dataset.tab
      container.querySelector(`#${id}`).classList.add('active')
    })
  })
}

export default createExperienceSection
