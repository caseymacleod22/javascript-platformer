class player {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 32
        this.bbx = new bbox(this.x, this.y, this.size, this.size)

        // game physics
        this.gravity = 5
        this.yspd = 0
        this.mspd = 10
        this.xspd = 0

        objects.push(this)
    }
    step() {
        // this.x = mouseX
        // this.y = mouseY
        this.yspd += this.gravity
        let ground = wallCollision(this.bbx, this.x, this.y+1)
        if(keyPress.W && ground) this.yspd = -25
        
        if(wallCollision(this.bbx, this.x, this.y + this.yspd)) {
            while(!wallCollision(this.bbx, this.x, this.y + Math.sign(this.yspd))) {
                this.y += Math.sign(this.yspd)
            }
                this.yspd = 0
            }
        if(this.yspd > 30) this.yspd = 30    
        this.y += this.yspd
        this.bbx.update(this.x, this.y)
        
        let d = keyDown.D - keyDown.A
        this.xspd = d * this.mspd
        this.x +=this.xspd
    }
    draw() {
        strokeColor(255, 255, 255)
        noFill()
        rectangle(this.x, this.y, this.size, this.size)
        // this.bbx.draw()
    }
}
