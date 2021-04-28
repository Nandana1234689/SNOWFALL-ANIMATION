class Child{
    constructor(){
        var order={
            isStatic: false,
            'restitution':0.1,
            'friction':0.2, 
            'density':0.5

        }
        this.body = Bodies.circle(1000,500,100,order);
        World.add(world,this.body);

        this.img = loadImage("images/child.png");

       
    }
    display(){
        
         push();
         translate(this.body.position.x,this.body.position.y);  
         imageMode(CENTER); 
         image (this.img, 0, 0, 250,250);
         pop()
    }

}