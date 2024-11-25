// テキスト「キーボード操作に反応する」
let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = windowHeight-25
}

function draw() {
  background(160, 192, 255);
  ellipse(x, y, 50);


let speed = 5; // 通常の移動速度

  // Sキーが押されている場合に加速
  if (keyIsDown("S".charCodeAt(0))) {
  speed = 10;
  }
  
  // 左矢印キーで移動
  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }

  // 右矢印キーで移動
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }

  

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
}
