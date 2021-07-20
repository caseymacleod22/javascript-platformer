class player {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 32
        this.bbx = new bbox(this.x, this.y, this.size, this.size)

        // game physics
        this.graivty = 7
        this.yspd = 0

        objects.push(this)
    }
    step() {
        this.x = mouseX
        this.y = mouseY
        // if(keyDown.W) this.y += 4
        // this.yspd = this.graivty
        // this.y += this.yspd
        this.bbx.update(this.x, this.y)
    }
    draw() {
        strokeColor(255, 255, 255)
        noFill()
        rectangle(this.x, this.y, this.size, this.size)
        this.bbx.draw()
    }
}
