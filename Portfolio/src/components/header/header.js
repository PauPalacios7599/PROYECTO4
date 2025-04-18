const createHeader = () => {
  const header = document.createElement('header')
  header.classList.add('header')

  header.innerHTML = `
    <nav>
      <ul class="nav-links">
        <li><button data-page="aboutme" onclick="console.log('click sobre botón sobre mí')">Sobre mí</button></li>

        <li><button class="nav-button" data-page="projects">Proyectos</button></li>
        <li><button class="nav-button" data-page="experience">Experiencia y formación</button></li>
        <li><button class="nav-button" data-page="contact">Contacto</button></li>
      </ul>
    </nav>
  `

  return header
}

export default createHeader
