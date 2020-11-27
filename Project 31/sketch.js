const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground1;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine= Engine.create();
  world=engine.world;
  ground1=new Ground(width/2,height,width,20)
   //Divisions
   for(var d=0;d<=width;d=d+80){
    divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
    
   }
    //Plinkos
 //first row
  for(var p=75;p<=width;p=p+50){
    plinkos.push(new Plinko(p,75));
   }
  //Second row
  for(var p=50;p<=width-10;p=p+50){
    plinkos.push(new Plinko(p,175));
   }
//thrid row
   for(var p=75;p<=width;p=p+50){
    plinkos.push(new Plinko(p,275));
   }

   for(var p=50;p<=width-10;p=p+50){
    plinkos.push(new Plinko(p,375));
   }
 
}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground1.display();  
 
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }
    
    
    
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for(var d=0;d<divisions.length;d++){
    divisions[d].display();
  }


  drawSprites();

}
