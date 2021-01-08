class Paper extends BaseClass.js {
    constructor(x,y){
      super(x.y,20,20);
      this.image = loadImage("paper.png")
    }

    display(){
      var pos=this.body.position
      var angle =this.body.angle
      super.display();
    }
  }
    