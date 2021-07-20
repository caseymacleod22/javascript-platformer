class player {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 32
        this.bbx = new bbox(this.x, this.y, this.size, this.size)

        // game physics
        this.gravity = 5
        this.yspd = 0

        objects.push(this)
    }
    step() {
        // this.x = mouseX
        // this.y = mouseY
        // if(keyDown.W) this.y += 4
        this.yspd = this.gravity
        if(wallCollision(this.bbx, this.x, this.y + this.yspd)) this.yspd = 0
        this.y += this.yspd
        this.bbx.update(this.x, this.y)
    }
    draw() {
        strokeColor(255, 255, 255)
        noFill()
        rectangle(this.x, this.y, this.size, this.size)
        this.bbx.draw()
    }
}
