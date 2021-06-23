class Iron {
    constructor(x, y) {
     
     
      var options = {
        'density':30,  
        'friction': 0.9,
        'restitution':12
      };
  
  
      this.body = Bodies.rectangle(x, y,options);
     
      this.width = 100;
      this.height = 100;
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
      stroke('black')
      fill('grey')
      rectMode(CENTER)
      rect(800, 540, this.width, this.height);
      pop();
    };
  };