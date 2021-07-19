function rectangle(x, y, w, h) {
    render.beginPath()
    render.rect(x, y, w, h)
    render.fill()
    render.stroke()
}

function fillColor(r, g, b) {
    r = String(r)
    g = String(g)
    b = String(b)
    render.fillStyle = 'rgb('+r+','+g+','+b+')'
}

function strokeColor(r, g, b) {
    r = String(r)
    g = String(g)
    b = String(b)
    render.strokeStyle = 'rgb('+r+','+g+','+b+')'
}

function strokeSize(size) {
    render.lineWidth = String(size)
}

function background(r, g, b) {
    fillColor(r, g, b)
    rectangle(0, 0, width, height)
}