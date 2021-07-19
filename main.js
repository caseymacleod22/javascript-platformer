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

let objects = []
window.onresize()
p = new player(50, 50)

function loop() {
    stepLoop()
    drawLoop()
}

function stepLoop() {
    for(let i = 0; i<objects.length; i++) {
        if(objects[i].step) objects[i].step()
    }
}

function drawLoop() {
    background(25, 25, 25)
    for(let i = 0; i<objects.length; i++) {
        if(objects[i].draw) objects[i].draw()
    }
}

const target_fps = 30
setInterval(loop, 1000/target_fps)
