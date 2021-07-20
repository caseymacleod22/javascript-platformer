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
    draw () {
        strokeColor(255, 255, 255)
        noFill()
        strokeSize(2)
        if(this.bbx.collision(p.bbx)) {
            strokeColor(255, 0, 0)
        }
        rectangle(this.x, this.y, this.size, this. size)
    }
}