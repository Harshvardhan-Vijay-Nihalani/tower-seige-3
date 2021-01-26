const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var platform;
var slingshot;
var score;

function preload() {

}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    score=0;
    polygon = new Polygon(200,250,20,20);
    
    ground = new Ground(600, 390, 1200,20);
    
    platform = new Ground(600, 305, 200, 50);

    box1 = new Baseclass(600,272);
    box2 = new Baseclass(580,272);  
    box3 = new Baseclass(620,272);
    box4 = new Baseclass(640,272);
    box5 = new Baseclass(560,272);
    box6 = new Baseclass(540,272);
    box7 = new Baseclass(660,272);
    fill("lightgreen");
    //floor 2
    box8 = new Baseclass(600,235);
    box9 = new Baseclass(620,235);
    box10 = new Baseclass(580,235);
    box11 = new Baseclass(560,235);
    box12 = new Baseclass(640,235);
    //floor 3
    box13 = new Baseclass(600,220);
    box14 = new Baseclass(620,220);
    box15 = new Baseclass(580,220);
    //last floor
    box16 = new Baseclass(600, 205);

    slingshot = new SlingShot(polygon.body,{x:200, y:250});
    
}

function draw(){
    background("blue");
    
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    polygon.display();
    platform.display();
    slingshot.display();   
    ground.display();
   

    text("Score: "+score, 0,15);
    Engine.update(engine); 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        Matter.Body.setPosition(polygon.body, { x: 200, y: 50 });
        slingshot.attach(polygon.body);
        
    }
}

function score(){
    
        score+=1;
}
