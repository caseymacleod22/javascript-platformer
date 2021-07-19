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
    drawLoop()
}
window.onresize()


function loop() {
    stepLoop()
    drawLoop()
}

function stepLoop() {

}

function drawLoop() {
    background(25, 25, 25)
    p.draw()
}

const target_fps = 30
setInterval(loop, 1000/target_fps)
