/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
function preload() {

  imgFace = loadImage('../assets/images/face.png');

  imgBG = loadImage('../assets/images/space.png');

}	

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
	orb_1.image = (imgFace);
	imgFace.resize(50, 50);
	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	//color the bg
	background(imgBG);
}
/*******************************************************/
//  END OF APP
/*******************************************************/