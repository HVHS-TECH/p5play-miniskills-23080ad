/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	//groups

	//alien group
	alienGroup = new Group();
	
	//add gravity x & y
	world.gravity.y = 10;
	
	//draw the canvas
	cnv = new Canvas(1000, 1000);

	//draw the orb
	orb_1 = new Sprite(500, 500, 20, 's');
	orb_1.color = 'red';

	//draw aliens
	for (i = 0; i < 10; i++) {
  		alien = new Sprite(random(0, 1000), random(0, 1000), random(30, 100), random(30, 100), 'd');
  		alien.vel.x = random(4, 7);
  		alien.vel.y = 4;
  		alien.bounciness = 1;
  		alien.friction = 0;
  		alienGroup.add(alien);
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

	//alien death setup
	orb_1.collides(alienGroup, functionDeath)
}

/*******************************************************/
// alien death collision with orb_1()
/*******************************************************/
function functionDeath(_orb_1, _ssss){
	_ssss.remove();
}

/*******************************************************/
//  END OF APP
/*******************************************************/