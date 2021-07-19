let canvas = document.getElementById('mycanvas')
let render = canvas.getContext('2d')
let width
let height
canvas.style.left = '0px'
canvas.style.top = '0px'
canvas.style.position = 'absolute'

window.onresize = function() {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height


    background(25, 25, 25)
    fillColor(255, 0, 125)
    strokeColor(0, 255, 255)
    strokeSize(3)
    rectangle(25, 25, 50, 100)
}
window.onresize()
