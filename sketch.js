
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var blob1, cradle1, platform1;

function setup() {
	var canvas = createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	blob1 = new Blob(280, 400);
	blob2 = new Blob(340, 400);
	blob3 = new Blob(400, 400);
	blob4 = new Blob(460, 400);
	blob5 = new Blob(520, 400);
	platform1 = new Platform(400, 200, 250, 20);
	cradle1 = new Cradle(blob1.body, { x: 280, y: 200 });
	cradle2 = new Cradle(blob2.body, { x: 340, y: 200 });
	cradle3 = new Cradle(blob3.body, { x: 400, y: 200 });
	cradle4 = new Cradle(blob4.body, { x: 460, y: 200 });
	cradle5 = new Cradle(blob5.body, { x: 520, y: 200 });
	var pointer = Matter.Mouse.create(canvas.elt);
	pointer.pixelRatio = pixelDensity();
	var options = {
		mouse: pointer
	}
	var mousee = Matter.MouseConstraint.create(engine, options);
	World.add(world, mousee);
	world.gravity.y=3;
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(180);
	
	text("USE MOUSE TO MOVE THE BALLS", 50, 50);
	text("PRESS C TO GET THE CODE", 50, 70);
	cradle1.show();
	cradle2.show();
	cradle3.show();
	cradle4.show();
	cradle5.show();
	blob1.show();
	blob2.show();
	blob3.show();
	blob4.show();
	blob5.show();
	platform1.show();
}

function keyPressed(){
	if (keyCode === 67) {
		codelink();
	  }
}

function codelink() {
	window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C-34";
  }