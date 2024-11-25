// 最終課題を制作しよう

let dotX, dotY; // 現在の位置
let initialDotX, initialDotY; // 初期位置
let isDragging = false; // ドラッグ中かどうか

function setup() {
  createCanvas(450, 450);
  background(10, 40, 60);

  // 点の初期位置
  initialDotX = width / 2 + 100;
  initialDotY = height / 2 - 56;

  // 現在位置を初期位置に設定
  dotX = initialDotX;
  dotY = initialDotY;
}

function draw() {
  background(10, 40, 60); // 背景を毎フレーム更新して残像を消す

  // 中心円
  fill(144, 210, 245);
  noStroke();
  ellipse(width / 2, height / 2, 265, 265);

  noFill();
  strokeWeight(25);

  // 弧(G)
  stroke(240, 212, 165);
  arc(width / 2, height / 2, 300, 300, PI - 46 / 50 * PI, PI + 7 / 8 * PI);

  // 横線(G)
  line(width / 2 - 10, height / 2 + 32, width / 2 + 146, height / 2 + 32);

  // 弧（T）
  stroke(90, 156, 76);
  arc(width / 2, height / 2 + 2.5, 230, 230, 0, PI - 18 / 100 * PI);
  // 横棒（T）
  line(width / 2 - 10, height / 2 + 2.5, width / 2 + 155, height / 2 + 2.5);

  // 弧（i）
  arc(width / 2, height / 2, 230, 230, PI - 1 / 10 * PI, PI + 3 / 4 * PI);

  // iの点
  fill(255);
  noStroke();
  ellipse(dotX, dotY, 30, 30);

  // ドラッグ中なら点をマウスの位置に追従
  if (isDragging) {
    dotX = mouseX;
    dotY = mouseY;
  } else {
    // ドラッグしていない場合は元の位置に戻す
    dotX = initialDotX;
    dotY = initialDotY;
  }
}

function mousePressed() {
  // マウスが押されたらドラッグ開始
  isDragging = true;
}

function mouseReleased() {
  // マウスが離されたらドラッグ終了
  isDragging = false;
}
