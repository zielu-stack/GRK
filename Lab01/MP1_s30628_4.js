function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(0);
  for (y=0; y<height; y++){
    for (x=0; x<width; x++){
      bval = (x+y)/(width+height)*255
      dx = x-width/2
      dy = y-height/2
      d = sqrt(dx*dx+dy*dy)
      set(x,y,color(255-d,d,bval));
 
    }
  }
  updatePixels();
}