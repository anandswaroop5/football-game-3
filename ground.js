class Ground{
    constructor(x,y,w,h){
    var option = {
        isStatic:true
    }
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.body = Bodies.rectangle(x,y,w,h,option)
    World.add(world,this.body)
    }
    display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos)
    fill("white")
    strokeWeight(0)
    stroke("white")
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
    }
}