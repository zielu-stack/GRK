var points = [[100,400],[500,400],[300,50]]

function setup() {
  createCanvas(800, 600);
  background(0);
  stroke(255,255,255);
  for (i=0; i<3;i++){
    point(points[i][0],points[i][1])
  }
  var cx= points[0][0]
  var cy= points[0][1]
  for (i=0; i<30000; i++){
    num = floor(random(0,3))
    cx = (cx+points[num][0])/2
    cy = (cy+points[num][1])/2
    point(cx,cy,color(255))
  }
  updatePixels();

}

// var points = [[100,400],[500,400],[300,50]]
// var cx= points[0][0]
// var cy= points[0][1]

// function setup() {
//   frameRate(60);
//   createCanvas(800, 600);
//   background(0);
//   stroke(255)
//   for (i=0; i<3;i++){
//     point(points[i][0],points[i][1])
//   }
// }

// function draw() {
//   num = floor(random(0,3))
//   cx = (cx+points[num][0])/2
//   cy = (cy+points[num][1])/2
//   point(cx,cy,color(255))
//   updatePixels();
// }