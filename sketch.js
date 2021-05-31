const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,30);

    box1 = new Box(700,300,100,100);
    box2 = new Box(800,300,100,100);
    box3 = new Box(900,300,100,100);
    box4 = new Box(1000,300,100,100);

    box5 = new Box(700,200,100,100);
    box6 = new Box(800,200,100,100);
    box7 = new Box(900,200,100,100);
    box8 = new Box(1000,200,100,100);
    
    box9= new Box(700,100,100,100);
    box10 = new Box(800,100,100,100);
    box11= new Box(900,100,100,100);
    box12= new Box(1000,100,100,100);

    ball = new Ball(550,150,50,50);

    chain = new SlingShot(ball.body,{x:550,y:150});
}

function draw(){
    background("white");
    Engine.update(engine);
   
    
    ground.display();
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
    
    ball.display();
    chain.display();
    
} 
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}




