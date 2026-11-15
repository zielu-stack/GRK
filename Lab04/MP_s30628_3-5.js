var imgA;
var imgB;
function setup() {
    createCanvas(512,512);
    background(255);
    imgA = createImage(512,512);
    imgB = createImage(512,512);
    imgA.loadPixels();
    imgB.loadPixels();
    var d = pixelDensity();
    for(var i=0; i<512*512*4*d; i+=4) {
      imgA.pixels[i]=240;
      imgA.pixels[i+1]=250;
      imgA.pixels[i+2]=240;
      imgA.pixels[i+3]=255;
      imgB.pixels[i]=240;
      imgB.pixels[i+1]=240;
      imgB.pixels[i+2]=250;
      imgB.pixels[i+3]=255;
    }
    imgA.updatePixels();
    imgB.updatePixels();
    // 3-5
    console.log("vector [6,7,1]")
    console.log("translate: ",makeTranslate(makeVector(6,7),2,3));
    console.log("scale: ",makeScale(makeVector(6,7),2,3));
    console.log("rotate: ",makeRotate(makeVector(6,7),45));
    console.log("shear: ",makeShear(makeVector(6,7),2,3));
    console.log("identity: ", makeIdentity());
}
function draw() {
    if (!keyIsDown(32)) {
      image(imgA,0,0);
      text('Image A',10,20);
    } else {
      image(imgB,0,0);
      text('Image B',10,20);
  }
}
function makeVector(x,y){
  return [x,y,1];
}
function drawVector(img,vec){
  img.set(vec[0],vec[1],color(255,0,0));
  img.updatePixels();
}
function mouseDragged(){
  var vector = makeVector(mouseX,mouseY);
  drawVector(imgA,vector);
}

//3-5

function makeTranslate(vec,tx,ty){
  matrix = [[1,0,tx],
            [0,1,ty],
            [0,0,1]]

  out_vec = [0,0,0];
  for (i=0; i<matrix.length; i++){
    for (j=0; j<matrix[i].length; j++){
      out_vec[i] += matrix[i][j]*vec[j]
    }
  }
  console.log(matrix)
  return out_vec
}

function makeScale(vec,sx,sy){
  matrix = [[sx,0,0],
            [0,sy,0],
            [0,0,1]]

  out_vec = [0,0,0];
  for (i=0; i<matrix.length; i++){
    for (j=0; j<matrix[i].length; j++){
      out_vec[i] += matrix[i][j]*vec[j]
    }
  }
  console.log(matrix)
  return out_vec
}

function makeRotate(vec,theta){
  radian = (theta/180)*Math.PI
  matrix = [[Math.cos(radian),-Math.sin(radian),0],
            [Math.sin(radian),Math.cos(radian),0],
            [0,0,1]]

  out_vec = [0,0,0];
  for (i=0; i<matrix.length; i++){
    for (j=0; j<matrix[i].length; j++){
      out_vec[i] += matrix[i][j]*vec[j]
    }
  }
  console.log(matrix)
  return out_vec
}

function makeShear(vec,shx,shy){
  matrix = [[1,shx,0],
            [shy,1,0],
            [0,0,1]]

  out_vec = [0,0,0];
  for (i=0; i<matrix.length; i++){
    for (j=0; j<matrix[i].length; j++){
      out_vec[i] += matrix[i][j]*vec[j]
    }
  }
  console.log(matrix)
  return out_vec
}

function makeIdentity(){
  return [[1,0,0],[0,1,0],[0,0,1]]
}
