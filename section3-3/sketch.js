// テキスト「キーボード操作に反応する」
let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, windowHeight-25, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  //if(keyIsDown(UP_ARROW)){ y -= 5; }
  //if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("P".charCodeAt(0))){ x+= 10; }
  if(keyIsDown("Q".charCodeAt(0))){ x-= 10; }

 }


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
