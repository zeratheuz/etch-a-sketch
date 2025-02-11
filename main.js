let pixelsNumber = 16
addPixels(pixelsNumber)
const button = document.querySelector(".pixelsNumber")
button.addEventListener("click", () => {
  removePixels()
  do { 
    pixelsNumber = prompt("How many pixels do you want?")
  } while (pixelsNumber > 100)
  addPixels(pixelsNumber)
})

function addPixels(num) {
  for (let i = 0; i < (num * num); i++) {
    const container = document.querySelector('.container')
    const div = document.createElement('div')
    div.setAttribute("class", 'pixel')
    const size = 64 / num
    div.setAttribute("style", `height: ${size}vmin; width: ${size}vmin;`)
    container.appendChild(div)
  }
  const pixels = document.querySelectorAll('.pixel')
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", (e) => {
      pixel.setAttribute("class", "color")
    })
  })
}

function removePixels() {
  const pixels = Array.from(document.querySelectorAll(".pixel"))
  const colors = Array.from(document.querySelectorAll(".color"))
  const divs = pixels.concat(colors) 
  divs.forEach((div) => {
    div.remove()
  })
}
