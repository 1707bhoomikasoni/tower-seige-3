class Block{
    constructor(x,y,width,height){
        var boxOptions={
       isStatic:false,
       friction:5.0,
       density:1.2
       
        }
    this.body=Bodies.rectangle(x,y,width,height,boxOptions)
   this.w=width
   this.h=height
    World.add(world,this.body)
    this.visibility=255
    }
display(){
    if(this.body.speed>3){
        World.remove(world,this.body)
        this.visibility=this.visibility-5
   push()
        tint(255,this.visibility)
      pop()  

}
       else{
        rectMode(CENTER)
        fill("pink")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        console.log(this.visibility)
       }
}
score(){
  
    if(this.visibility<0 && this.visibilty>-105){
    score++
    }
  }
  };