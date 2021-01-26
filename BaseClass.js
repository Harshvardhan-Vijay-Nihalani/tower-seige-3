class Baseclass{
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.width = 20;
      this.height = 30;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.visibility=255;
        
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 1){
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this. width, this.height)
        pop();
      }else{  
        push();
        this.visibility-=25;
        tint(255,this.visiblity);
        World.remove(world, this.body);
        if(this.visibility>0){
          score+=1;
        } 
        pop();
      }   
    }
}