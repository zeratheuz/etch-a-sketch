for (let i = 0; i < 256; i++) {
  const container = document.querySelector('.container')
  const div = document.createElement('div')
  div.setAttribute("class", 'pixel')
  container.appendChild(div)
}

const pixels = document.querySelectorAll('.pixel')
pixels.forEach((pixel) => {
  pixel.addEventListener("mouseenter", (e) => {
    pixel.setAttribute("class", "color")
  })
} )