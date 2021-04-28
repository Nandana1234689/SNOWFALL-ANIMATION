class Snow {
    constructor(a,b){
        var order={
            isStatic: false,
           'restitution':0.4,
          // 'friction':0.2, 
           // 'density':0.5

        }
        this.body = Bodies.rectangle(a,b,10,10,order);
        World.add(world,this.body);

        this.img = loadImage("images/snow.png");

       
    }
    display(){
        
         push();
         translate(this.body.position.x,this.body.position.y);  
         imageMode(CENTER); 
         image (this.img, 0, 0, 10,10);
         pop()
    }
remove(){
    this.body = Bodies.rectangle(a,b,10,10,order);
    World.remove(world,this.body);
}
}
