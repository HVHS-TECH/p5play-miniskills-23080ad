/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
var width;
var height;
var pos_x;
var pos_y;


/*******************************************************/
function setup() {
	console.log("setup: ");
	
	//draw the canvas
	cnv = new Canvas(1000, 1000);

	//create a rectangle
	rectangle = new Sprite(100, 100, 20, 20);
	rectangle.color = 'green';

	//create a circle
	circle = new Sprite(190, 200, 300)
	circle.color = 'red';

	//create a rectangle
	rectangle = new Sprite(20, 120, 300, 30)
}
/*******************************************************/
//  END OF APP
/*******************************************************/