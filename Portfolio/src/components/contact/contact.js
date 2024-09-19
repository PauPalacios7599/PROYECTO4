export const createContactSection = () => {
  const section = document.createElement('section')
  section.id = 'contact'
  section.innerHTML = `
    <h2>Contacto</h2>
    <div class="contact-logos">
      <a href="paupalacios.euclides@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src="/PROYECTO4/Portfolio/public/images/email.png" alt="Email" />
      </a>
      <a href="https://www.linkedin.com/in/pau-palacios-0772b61a6/?trk=opento_sprofile_goalscard" target="_blank" rel="noopener noreferrer">
        <img src="/PROYECTO4/Portfolio/public/images/linkedin1.png" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/paauupg2/" target="_blank" rel="noopener noreferrer">
        <img src="/PROYECTO4/Portfolio/public/images/insta.png" alt="Instagram" />
      </a>
    </div>
  `
  section.classList.add('contact')
  return section
}
