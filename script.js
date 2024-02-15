function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substutuir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Avatar de Rldosantos como um anão druida sem o dark mode ativo"
    )
  } else {
    // se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Avatar de Rldosantos como um anão patrulheiro com o dark mode ativo"
    )
  }
}
