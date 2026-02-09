/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()

// variables

/*******************************************************/
function setup() {
	console.log("setup: ");

	//add gravity x & y
	world.gravity.y = 10;
	
	
	//draw the canvas
	cnv = new Canvas(1000, 1000);

	
	//create a square
	square = new Sprite(100, 100, 20, 20);
	square.color = 'green';
	square.rotationSpeed = 2;
	square.vel.x = 2;
	square.bounciness = 1;
	

	//create a circle
	circle = new Sprite(190, 200, 30, 'd')
	circle.color = 'red';
	circle.vel.y = 100;


	//create a platform_right
	platform_1 = new Sprite(1000, 500, 10, 1000, 'k')

	//create a platform_left
	platform_2 = new Sprite(0, 500, 10, 1000, 'k')

	//create a platform_bottom
	platform_3 = new Sprite(500, 970, 1000, 10, 'k')

	//create a platform_top
	platform_4 = new Sprite(500, 30, 1000, 10, 'k')
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