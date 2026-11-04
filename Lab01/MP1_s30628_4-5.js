function setup() {
  createCanvas(800, 600);
  background(200,200,255);
  for (y=floor(height*2/3); y<height; y++){
    for (x=0; x<width; x++){
      set(x,y,color(0,100,0))
    }
  }
  for (i=0; i<1000; i++){
    set(floor(random(width)),floor(random(height*2/3,height)),color(random(255),random(255),random(255)))
  }
  for (y=floor(height/3);y<floor(height*2/3);y++){
    for (x=floor(width/4);x<floor(width*3/4);x++){
      set(x,y,color(100, 50, 30))
    }
  }
  for (var w=50,x=floor(width/2); w<200;w++,x+=2){
    for (y=w;y<200;y++){
      set(x,y,color(255,10,0))
      set(x+1,y,color(255,10,0))
    }
  }
  for (var w=50,x=floor(width/2); w<200;w++,x-=2){
    for (y=w;y<200;y++){
      set(x,y,color(255,10,0))
      set(x-1,y,color(255,10,0))
    }
  }
  updatePixels();

}

function draw() {
}