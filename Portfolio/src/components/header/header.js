export const createHeader = () => {
  const header = document.createElement('header')
  header.classList.add('header') // Añadir clase 'header'

  // Crear el título
  const title = document.createElement('h1')
  title.textContent = 'MI PORTFOLIO'

  // Crear el elemento de navegación
  const nav = document.createElement('nav')
  nav.innerHTML = `
    <a href="#projects">Proyectos</a>
    <a href="#skills">Habilidades</a>
    <a href="#aboutme">Sobre Mí</a>
    <a href="#contact">Contacto</a>
  `

  // Añadir el título y la navegación al header
  header.appendChild(title)
  header.appendChild(nav)

  return header
}
