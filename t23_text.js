/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	//draw the canvas
	cnv = new Canvas(windowWidth, windowHeight);

	//create a rectangle
	rectangle = new Sprite(100, 100, 20, 20, 'd');
	rectangle.color = 'green';
	rectangle.rotationspeed = 2;
	rectangle.friction = 2;

	//create the floor
	ground = new Sprite(windowWidth / 2, 940, windowWidth, 30, 's')

	//set world gravity
	world.gravity.y = 3;

	//adds the player to its own group for collisionjs
	playerGroup = new Group();
	playerGroup.add(rectangle);

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	//color the bg
	background('grey');

	//jump controls

	if (kb.pressing('up')) {
		playerGroup.collides(ground, rectangle.vel.y = 3);
	}







}


/*******************************************************/
//  END OF APP
/*******************************************************/