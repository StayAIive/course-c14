function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(ball.x,ball.y,ball.radius);
  fill(ball.color[4]);
  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;
}

var ball = {
  x : 20,
  y : 20,
  radius : 30,
  color : ["red","blue","green","yellow","purple","orange","pink"],
  speedX : 5,
  speedY : 5
}