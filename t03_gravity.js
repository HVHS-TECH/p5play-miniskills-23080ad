/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	//add gravity x & y
	world.gravity.y = 10;
	world.gravity.x = 5;
	
	
	//draw the canvas
	cnv = new Canvas(1000, 1000);

	
	//create a rectangle
	rectangle = new Sprite(100, 100, 20, 20);
	rectangle.color = 'green';
	rectangle.rotationSpeed = 2;
	rectangle.vel.x = 2;

	//create a circle
	circle = new Sprite(190, 200, 300, 's')
	circle.color = 'red';

	//create a rectangle
	rectangle = new Sprite(20, 120, 300, 30, 'd')
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	//color the bg
	background('black');
}
/*******************************************************/
//  END OF APP
/*******************************************************/