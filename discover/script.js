const toggleMode = () => {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // pega tag img e substituir img
  const img = document.querySelector("#profile img")
  //se tiver light mode, img light
  //se tiver dark mode, img normal

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute("alt", "Não sou eu")
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
    img.setAttribute("alt", "Sou eu")
  }
}
