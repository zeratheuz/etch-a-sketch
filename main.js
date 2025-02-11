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
  const size = 64 / num
  for (let i = 0; i < (num * num); i++) {
    const container = document.querySelector('.container')
    const div = document.createElement('div')
    div.setAttribute("class", 'pixel')
    div.setAttribute("style", `height: ${size}vmin; width: ${size}vmin;`)
    container.appendChild(div)
  }
  const pixels = document.querySelectorAll('.pixel')
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", (e) => {
      pixel.setAttribute("style", `
        width: ${size}vmin;
        height: ${size}vmin;
        background-color: ${randomColor()} 
        `)
    })
  })
}

function removePixels() {
  const pixels = Array.from(document.querySelectorAll(".pixel"))
  const divs = pixels 
  divs.forEach((div) => {
    div.remove()
  })
}

function randomColor() {
  const rgb = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`
  console.log(rgb)
  return rgb
}