class Ball{

    constructor(x,y,width,height){
    var options = {
    
     
    density:1.0,
    frictionAir:0.005
    }
    
      this.body = Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.body)
      this.width = width
      this.height= height
    }
    
    display(){
      var angle = this.body.angle
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(angle)
     
      ellipse(0,0,this.width,this.height)
      pop()
    
    
    }
    
    }