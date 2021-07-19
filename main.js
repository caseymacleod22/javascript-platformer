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
    noFill()
    strokeColor(0, 255, 255)
    strokeSize(3)
    rectangle(25, 25, 50, 100)
    strokeColor(255, 0, 0)
    line(50, 100, 25, 300)
    noStroke()
    fillColor(0, 255, 255)
    circle(200, 200, 75, 67)
}
window.onresize()
