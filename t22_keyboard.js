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
	cnv = new Canvas(1000, 1000);

	//create a rectangle
	rectangle = new Sprite(100, 100, 20, 20, 'd');
	rectangle.color = 'green';
	rectangle.rotationspeed = 2;
	rectangle.friction = 2;
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	//color the bg
	background('black');

	//movement controls
	if (kb.pressing('left')){
		rectangle.vel.x = -5;
	}

	if (kb.pressing('right')){
		rectangle.vel.x = 5;
	}

	if (kb.pressing('up')){
		rectangle.vel.y = -5;
	}

	if (kb.pressing('down')){
		rectangle.vel.y = 5;
	}

	//stoping controls
	if (kb.released('left')){
		rectangle.vel.x = 0;
	}

	if (kb.released('right')){
		rectangle.vel.x = 0;
	}

	if (kb.released('up')){
		rectangle.vel.y = 0;
	}

	if (kb.released('down')){
		rectangle.vel.y = 0;
	}

}


/*******************************************************/
//  END OF APP
/*******************************************************/