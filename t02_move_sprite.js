/*******************************************************/
// P5.play: t02_move_sprite
// Move a sprite
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	
	//draw the canvas
	cnv = new Canvas(1000, 1000);

	//create a rectangle
	rectangle = new Sprite(100, 100, 20, 20);
	rectangle.color = 'green';
	rectangle.rotationSpeed = 2;
	rectangle.vel.x = 2;

	//create a circle
	rub = new Sprite(190, 200, 300)
	rub.color = 'red';

	//create a rectangle
	rectangle = new Sprite(20, 120, 300, 30)
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