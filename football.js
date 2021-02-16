class Football{
    constructor(x,y,r){
    var options = {
        restitution:0.5,
        density:0.8,
        isStatic:false,
        friction:1
    }
    this.x = x
    this.y = y
    this.r = r
    this.image = loadImage("images/footbal game img 1.png")
    this.body  = Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body)
    }
    display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    image(this.image,0,0,this.r*7,this.r*7)
    pop()
    }
}