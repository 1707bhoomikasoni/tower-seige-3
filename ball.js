class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:1.2
        }
    this.body=Bodies.circle(x,y,40,options)
    World.add(world,this.body)
    }
display(){
    ellipseMode(CENTER)
    fill("purple")
    ellipse(this.body.position.x,this.body.position.y,40)
}

}