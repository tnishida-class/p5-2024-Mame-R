// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(0, 51, 153); // 青い背景

  fill(255, 204, 0); // 星を黄色に設定
  noStroke(); // 星の枠線をなくす

  // 12個の星を円形に配置
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 150 + cos(theta) * 70;
    let y = 100 + sin(theta) * 70;

    push(); // 座標系を保存
    translate(x, y); // 星を配置する位置に移動
    rotate(-PI / 2); // 星を縦向きに回転
    star(0, 0, 6, 12, 5); // 星を描画（中心に配置）
    pop(); // 座標系を元に戻す
  }
  // 星を描画する関数
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
