import emailImg from '../../assets/images/email.png'
import linkedinImg from '../../assets/images/linkedin.png'
import instaImg from '../../assets/images/insta.png'

export const createContactSection = () => {
  const section = document.createElement('section')
  section.id = 'contact'
  section.classList.add('contact')

  // Crear el título de la sección
  const title = document.createElement('h2')
  title.textContent = 'Contacto'
  section.appendChild(title)

  // Crear el contenedor de logos de contacto
  const contactLogos = document.createElement('div')
  contactLogos.classList.add('contact-logos')

  // Lista de contactos con imágenes importadas
  const contacts = [
    {
      href: 'mailto:paupalacios.euclides@gmail.com',
      img: emailImg,
      alt: 'Email'
    },
    {
      href: 'https://www.linkedin.com/in/pau-palacios-0772b61a6/?trk=opento_sprofile_goalscard',
      img: linkedinImg,
      alt: 'LinkedIn'
    },
    {
      href: 'https://www.instagram.com/paauupg2/',
      img: instaImg,
      alt: 'Instagram'
    }
  ]

  // Crear los elementos <a> con sus imágenes
  contacts.forEach(({ href, img, alt }) => {
    const link = document.createElement('a')
    link.href = href
    link.target = '_blank'
    link.rel = 'noopener noreferrer'

    const image = document.createElement('img')
    image.src = img
    image.alt = alt

    link.appendChild(image)
    contactLogos.appendChild(link)
  })

  // Agregar los logos al section
  section.appendChild(contactLogos)

  return section
}
