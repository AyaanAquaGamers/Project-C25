class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':0.3,
        }

     
     this.body=Bodies.circle(x,y,radius/2,options)
     this.radius=radius

    this.paperImage=loadImage("paper.png")
     World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        
       fill("yellow")
       
       image(this.paperImage,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}