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
        this.yspd += this.gravity
        if(keyPress.W) this.yspd = -20
        
        if(wallCollision(this.bbx, this.x, this.y + this.yspd)) {
            while(!wallCollision(this.bbx, this.x, this.y + Math.sign(this.yspd))) {
                this.y += Math.sign(this.yspd)
            }
                this.yspd = 0
            }
        if(this.yspd > 30) this.yspd = 30    
        this.y += this.yspd
        this.bbx.update(this.x, this.y)
    }
    draw() {
        strokeColor(255, 255, 255)
        noFill()
        rectangle(this.x, this.y, this.size, this.size)
        // this.bbx.draw()
    }
}
