let pixelsNumber = 256
addPixels(pixelsNumber)
const button = document.querySelector(".pixelsNumber")
button.addEventListener("click", () => {
  removePixels()
  pixelsNumber = prompt("How many squares do you want?")
  pixelsNumber *= pixelsNumber
  addPixels(pixelsNumber)
})

function addPixels(num) {
  for (let i = 0; i < num; i++) {
    const container = document.querySelector('.container')
    const div = document.createElement('div')
    div.setAttribute("class", 'pixel')
    container.appendChild(div)
  }
  const pixels = document.querySelectorAll('.pixel')
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", (e) => {
      pixel.setAttribute("style", "background-color: blueviolet")
    })
  })
}

function removePixels() {
  const divs = document.querySelectorAll(".pixel")
  divs.forEach((div) => {
    div.remove()
  })
}
