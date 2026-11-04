function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(0);
  for (y=0; y<height; y++){
    for (x=0; x<width; x++){
      val = x/width*255
      set(x,y,color(val));
 
    }
  }
  updatePixels();
}