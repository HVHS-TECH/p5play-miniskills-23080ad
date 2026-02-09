/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	//add gravity x & y
	world.gravity.y = 10;
	
	
	//draw the canvas
	cnv = new Canvas(1000, 1000);

	//draw aliens

	for (i=0; i< 100; i++){
		alien = new Sprite(10,10,10);

  alien.vel.x = 3;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;
	}

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