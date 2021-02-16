class Launcher{
constructor(bodyA,pointB){
var options =  {
 bodyA:bodyA,
 pointB:pointB,
 stiffness:0.05,
 length:0.5  
}
this.bodyA = bodyA
this.pointB = pointB
this.launcher = Constraint.create(options)
World.add(world,this.launcher)
}    
attach(bodyA){
this.launcher.bodyA = bodyA
}
fly(){
this.launcher.bodyA = null  
}
display(){
    if(this.launcher.bodyA){
        var pointA  = this.launcher.bodyA.position
        var pointB = this.pointB
        strokeWeight(0)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}