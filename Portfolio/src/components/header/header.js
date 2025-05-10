const createHeader = () => {
  const header = document.createElement('header')
  header.classList.add('header')

  header.innerHTML = `
    <nav>
      <ul class="nav-links">
        <li><button data-page="aboutme">Sobre mí</button></li>
        <li><button data-page="projects">Proyectos</button></li>
        <li><button data-page="experience">Experiencia y Estudios</button></li>
      </ul>
      <div class="social-icons">
        <a href="https://github.com/PauPalaciosGordillo" target="_blank">
          <img src="./src/assets/images/github2.png" alt="GitHub" class="social-icon" />
        </a>
        <a href="https://linkedin.com/in/paupalaciosgordillo" target="_blank">
          <img src="./src/assets/images/linkedin2.png" alt="LinkedIn" class="social-icon" />
        </a>
        <a href="mailto:paupalaciosgordillo@gmail.com">
          <img src="./src/assets/images/gmail2.png" alt="Email" class="social-icon" />
        </a>
      </div>
    </nav>
  `
  return header
}

export default createHeader
