const projects = [
  {
    title: 'Mundo Gravel',
    description:
      'Esta fue la primera página que cree ya usando funcionalidades de JavaScript',
    image: '../src/assets/images/mundogravel.png',
    link: 'https://github.com/PauPalacios7599/PROYECTO-2'
  },
  {
    title: 'Pinterest',
    description:
      'En este proyecto, haciendo uso de UNSPLASH, se realiza la simulación de la conocida página de PINTEREST',
    image: '../src/assets/images/pinterest.png',
    link: 'https://github.com/PauPalacios7599/proyecto3'
  },
  {
    title: 'Juego de Memoria',
    description:
      'En este proyecto, realizo el juego de memoria que todos hemos jugado alguna vez de niños.',
    image: '../src/assets/images/JuegoMemoria.png',
    link: 'https://github.com/PauPalacios7599/PROYECTO5/tree/master/JuegoMemoria'
  },
  {
    title: 'Snake',
    description:
      'En este proyecto, he realizado el juego que todos hemos jugado alguna vez en la vida, el SNAKE.',
    image: '../src/assets/images/Snake.png',
    link: 'https://github.com/PauPalacios7599/PROYECTO5/tree/master/Snake'
  },
  {
    title: 'Tres en Raya',
    description:
      'En este proyecto, he podido desarrollar el típico juego competitivo que hemos jugado alguna vez en una hoja de papel con nuestros amigos en clase, el TRES EN RAYA.',
    image: '../src/assets/images/TresRaya.png',
    link: 'https://github.com/PauPalacios7599/PROYECTO5/tree/master/TresRayae'
  }
]

export const createProjectsSection = () => {
  const section = document.createElement('section')
  section.id = 'projects'
  section.innerHTML = `
    <h2>PROYECTOS</h2>
    <div class="card-container">
      ${projects
        .map(
          (project) => `
        <div class="card">
          <img src="${project.image}" alt="${project.title}" />
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">Ver demo</a>
        </div>
      `
        )
        .join('')}
    </div>
  `
  section.classList.add('projects')
  return section
}
export default createProjectsSection
