const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(900, 0, 70, 70);
  box2 = new Box(900, 0, 70, 70);
  box3 = new Box(900, 0, 70, 70);
  box4 = new Box(900, 0, 70, 70);
  box5 = new Box(900, 0, 70, 70);
  box6 = new Box(900, 0, 70, 70);
  box7 = new Box(900, 0, 70, 70);

  box11 = new Box(800, 0, 70, 70);
  box21 = new Box(800, 0, 70, 70);
  box31 = new Box(800, 0, 70, 70);
  box41 = new Box(800, 0, 70, 70);
  box51 = new Box(800, 0, 70, 70);
  box61 = new Box(800, 0, 70, 70);
  box71 = new Box(800, 0, 70, 70);
  box81 = new Box(800, 0, 70, 70);

  box110 = new Box(700, 0, 70, 70);  
  box111 = new Box(700, 0, 70, 70);
  box112 = new Box(700, 0, 70, 70);
  box113 = new Box(700, 0, 70, 70);
  box114 = new Box(700, 0, 70, 70);

  box211 = new Box(600, 0, 70, 70);
  box311 = new Box(600, 0, 70, 70);
  box411 = new Box(600, 0, 70, 70);
  box511 = new Box(600, 0, 70, 70);
  box611 = new Box(600, 0, 70, 70);
  box711 = new Box(600, 0, 70, 70);
  box811 = new Box(600, 0, 70, 70);
  box911 = new Box(600, 0, 70, 70); 
 box1011 = new Box(600, 0, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();

  box11.display();
  box21.display();
  box31.display();
  box41.display()
  box51.display();
  box61.display();
  box71.display();
  box81.display();

  box110.display(); 
   box111.display();  
   box112.display();  
   box113.display();
   box114.display();

   box211.display();
   box311.display();
   box411.display()
   box511.display();
   box611.display();
   box711.display();
   box811.display();
   box911.display(); 
    box1011.display();  

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY}); 
}
function mouseReleased(){
rope.fly();
}