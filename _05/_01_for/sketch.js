function setup() {
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < width; i = i + 20) {

   print('hello ' + i);
   rect(i, height/2, 10, 10);
  }
}