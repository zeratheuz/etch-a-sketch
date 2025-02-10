for (let i = 0; i < 256; i++) {
  const container = document.querySelector('.container')
  const div = document.createElement('div')
  div.setAttribute("class", 'pixel')
  container.appendChild(div)
}

const pixel = document.querySelector('.pixel')
  pixel.addEventListener("mouseenter", (e) => {
  pixel.setAttribute("class", "color")
})