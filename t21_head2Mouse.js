/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
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
	rectangle.rotationspeed = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	//color the bg
	background('black');

	rectangle.moveTowards(mouseX,mouseY,p);
}


/*******************************************************/
//  END OF APP
/*******************************************************/