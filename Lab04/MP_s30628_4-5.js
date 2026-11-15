
var imgA;
var imgB;

function setup() {
  createCanvas(512, 512);
  background(255);

  imgA = createImage(512, 512);
  imgB = createImage(512, 512);

  imgA.loadPixels();
  imgB.loadPixels();

  for (let i = 0; i < 512 * 512 * 4; i += 4) {
    imgA.pixels[i] = 240;
    imgA.pixels[i+1] = 250;
    imgA.pixels[i+2] = 240;
    imgA.pixels[i+3] = 255;

    imgB.pixels[i] = 240;
    imgB.pixels[i+1] = 240;
    imgB.pixels[i+2] = 250;
    imgB.pixels[i+3] = 255;
  }

  imgA.updatePixels();
  imgB.updatePixels();
}

function draw() {
  if (!keyIsDown(32)) {
    image(imgA, 0, 0);
    text('Image A', 10, 20)
  } else {
    image(imgB, 0, 0);
    text('Image B', 10, 20)
  }
}

function makeVector(x, y) {
  return [[x], [y], [1]]
}

function drawVector(img, vec) {
  img.set(vec[0][0], vec[1][0], color(255, 0, 0))
  img.updatePixels()
}

function mouseDragged() {
  let vector = makeVector(mouseX, mouseY)
  let translate = makeTranslate(20, 20);
  let scale = makeScale(0.5, 2);
  let rotate = makeRotate(45);
  let transformA = [translate,scale,rotate]
  let transformB = [rotate, scale, translate]
  let transformedMatrixA = multiMultiply(transformA)
  let transformedMatrixB = multiMultiply(transformB)
  let transformedVectorA = multiply(transformedMatrixA, vector)
  let transformedVectorB = multiply(transformedMatrixB, vector)
  drawVector(imgA, transformedVectorA);
  drawVector(imgB, transformedVectorB)
}

function multiply(matrixA, matrixB) {
  let out_matrix = [];
  for (let i = 0; i < matrixA.length; i++) {
    out_matrix[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      out_matrix[i][j] = 0;
      for (let k = 0; k < matrixB.length; k++) {
        out_matrix[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return out_matrix;
}

function multiMultiply(matrixes) {
  matrixes = matrixes.reverse();
  let out_matrix = matrixes[0]
  for (let i = 1; i < matrixes.length; i++) {
    out_matrix = multiply(out_matrix, matrixes[i])
  }
  return out_matrix;
}

function makeTranslate(tx, ty) {
  return [[1, 0, tx],
          [0, 1, ty],
          [0, 0, 1]]
}

function makeScale(sx, sy) {
  let cx = 256;
  let cy = 256;
  return [
    [sx, 0, cx * (1 - sx)],
    [0, sy, cy * (1 - sy)],
    [0, 0, 1]
  ]
}

function makeRotate(theta) {
  let radian = theta * Math.PI / 180
  let cos = Math.cos(radian)
  let sin = Math.sin(radian)
  let cx = 256;
  let cy = 256;
  return [
    [cos, -sin, cx * (1 - cos) + cy * sin],
    [sin, cos, cy * (1 - cos) - cx * sin],
    [0, 0, 1]
  ];
}

function makeShear(shx, shy) {
  let cx = 256;
  let cy = 256;

  return [
    [1, shx, -shx * cy],
    [shy, 1, -shy * cx],
    [0, 0, 1]
  ]
}

function makeIdentity() {
  return [[1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]];
}