let walls = []
class wall {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 32
        this.bbx = new bbox(this.x, this.y, this.size, this.size)
        objects.push(this)
        walls.push(this)
    }
    // draw () {
    //     strokeColor(255, 255, 255)
    //     noFill()
    //     strokeSize(2)
    //     if(this.bbx.collision(p.bbx)) {
    //         strokeColor(255, 0, 0)
    //     }
    //     rectangle(this.x, this.y, this.size, this. size)
    // }
}
function wallCollision(bbx, x, y) {
    let lastX = bbx.x1
    let lastY = bbx.y1
    bbx.update(x, y)
    let ret = false
    
    for(let i=0; i<walls.length; i++) {
        if(walls[i].bbx.collision(bbx)) {
            ret = true
            break
        }
    }

    bbx.update(lastX, lastY)
    return ret
}