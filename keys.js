let mouseX = 0
let mouseY = 0
document.onmousemove = function(event) {
    mouseX = event.clientX
    mouseY = event.clientY
}


// let keyPress = {}
// let keyDown = {}
// let keyRelease = {}

for(let i=0; i<255; i++) {
    let l = String.fromCharCode(i)
    keyPress[l] = false
    keyRelease[l] = false
    keyDown[l] = false
}

document.onkeypress = function(event) {
    let key = (event.key).toUpperCase()
    if(!keyDown[key]) {
        keyDown[key] = true
        keyPress[key] = true
    }
}
document.onkeyup = function(event) {
    let key = (event.key).toUpperCase()
    keyDown[key] = false
    keyRelease[key] = true
}

function keyEnd() {
    for(let i in keyPress) {
        keyPress[i] = false
        keyRelease[i] = false 
    }
}