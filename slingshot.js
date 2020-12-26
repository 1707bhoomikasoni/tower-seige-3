class Slingshot{
    constructor(body1,point2){
        var option={
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:10
        }
   this.sling=Constraint.create(option)
   this.pointB=point2
   World.add(world,this.sling)
    }
display(){
   if(this.sling.bodyA) {
    var point1=this.sling.bodyA.position
    var point2=this.pointB
    strokeWeight(3)
    line(point1.x,point1.y,point2.x,point2.y)  
   }
    
}
fly(){
    this.sling.bodyA=null
}
join(ball){
    this.sling.bodyA=ball
}

}