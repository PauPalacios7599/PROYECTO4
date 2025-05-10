import yoImage from '../../assets/images/yo.jpg'
import htmlLogo from '../../assets/images/html2.png'
import cssLogo from '../../assets/images/css2.png'
import jsLogo from '../../assets/images/js2.png'
import reactLogo from '../../assets/images/react2.png'
import nodeLogo from '../../assets/images/nodejs2.jpg'

const createAboutMeSection = () => {
  const section = document.createElement('section')
  section.id = 'aboutme'
  section.classList.add('aboutme')

  section.innerHTML = `
    <h2>SOBRE MÍ</h2>
    <div class="aboutme-container">
      <div class="aboutme-text">
        <p class="quote">"Transformando ideas en soluciones funcionales."</p>
        <p>
          Soy Pau Palacios, desarrollador web apasionado por crear experiencias digitales útiles, limpias y funcionales.
          Actualmente me estoy formando como desarrollador Full Stack en ThePower Education y estoy enfocado en
          tecnologías como JavaScript, React, HTML y CSS. 
        </p>
        <p>
          Vengo del mundo de la electricidad, donde he desarrollado una mentalidad lógica y resolutiva que ahora aplico
          al desarrollo web. Me encanta aprender, mejorar y buscar formas eficientes de resolver problemas.
        </p>

        <div class="tech-stack">
          <h3>Tecnologías que uso:</h3>
          <ul class="tech-logos">
            <li><img src="${htmlLogo}" alt="HTML5" title="HTML5" /></li>
            <li><img src="${cssLogo}" alt="CSS3" title="CSS3" /></li>
            <li><img src="${jsLogo}" alt="JavaScript" title="JavaScript" /></li>
            <li><img src="${reactLogo}" alt="React" title="React" /></li>
            <li><img src="${nodeLogo}" alt="Node" title="Node" /></li>
          </ul>
        </div>

        <button class="see-projects-btn" data-page="projects">Ver mis proyectos →</button>
      </div>

      <div class="aboutme-image">
        <img src="${yoImage}" alt="Foto de Pau Palacios" />
      </div>
    </div>
  `

  return section
}

export default createAboutMeSection
