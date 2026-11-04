function preload(){
  img = loadImage("https://static.wikia.nocookie.net/nowa-przyszlosc/images/0/0f/Jan_Pawe%C5%82.jpg/revision/latest?cb=20190924132209&path-prefix=pl")
}

function setup() {
  var histogram = new Array(256);
  histogram.fill(0);

  createCanvas(512,512*2);
  background('black');
  stroke('yellow');
  
  img.resize(width,width);
  img.filter('gray');  
  img.loadPixels();
  for (x=0;x<img.width;x++){
    for (y=0;y<img.height;y++){
      pos=4*(y*img.width+x);

      r = img.pixels[pos]

      histogram[r]+=1
    }
  }
  max_hist = Math.max(...histogram)

  for (i=0;i<width;i+=2){
    y = histogram[i/2]/max_hist*height/2
    line(i,height/2,i,height/2-6*y)
  }
  
  updatePixels();
  image(img,0,height/2)
}

function draw() {
}