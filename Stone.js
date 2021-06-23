
  class Stone {
    constructor(x, y) {
     
     
      var options = {
        'density':12,  
        'friction': 0.9,
        'restitution':12
      };
  
  
      this.body = Bodies.rectangle(x, y,options);
     
      this.width = 70;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      
        var pos = this.body.position;
        pos.x = 200;
        pos.y = 200;
    var angle = this.body.angle;
  
      push();
      
      rotate(angle);
      strokeWeight(3);
      stroke('purple')
      fill('black')
      rectMode(CENTER)
      rect(600, 570, this.width, this.height);
      pop();
    };
  };