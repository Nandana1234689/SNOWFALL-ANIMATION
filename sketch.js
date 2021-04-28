const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var snow =[];
var snownHeight=300;
var boy,boyimg
function preload() {
    bg = loadImage("images/bg.png")
    boyimg = loadImage("images/child.png")
    bm = loadSound("Piano.mp3")
}

function setup(){
 createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;
    boy  = new Child ()
    ground = new Ground ()
   

    bm.play()
    
}

function draw(){
    background(0)

    imageMode (CENTER)
    image (bg,600,325,1200,650)
  //  image (boyimg,1000,510,250,250)
    Engine.update(engine);


     boy.display ()
     ground.display()
    


  if (frameCount%10===0){
    snow.push(new Snow(random(width/8-10,width+10),10,10))
 } 

 for(var n = 0; n<snow.length;n++){
   snow[n].display();
   
 }
 

}
function keyPressed(){
  if(keyCode === 37){
   
  Matter.Body.applyForce(boy.body,boy.body.position,{x:-190,y:195})
}
else if(keyCode === 39){
   
  Matter.Body.applyForce(boy.body,boy.body.position,{x:180,y:-195})
}





}
