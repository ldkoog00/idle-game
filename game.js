var score = 5;

var title = new Title('Clicker Game');

var add = new Button('1', btnPress);
var sub = new Button('-1', btnPress2);
var scoreBoard = new Text(score);

setInterval(btnPress, 1000);

function btnPress() {
  score = score + 1;
  scoreBoard.edit(score);
  if (score <= 0){
    textWeight(10);
    textStroke(0);
    let message = new Text("You Win");
  
  }
  if (score >= 10){
    textWeight(10);
    textStroke(0);
    text(200, 200, "You Loose");
  
  }
}
function btnPress2() {
  score = score + -0.25;
  scoreBoard.edit(score);
  if (score <= 0){
    textWeight(10);
    textStroke(0);
    text(200, 200, "You Win");
  
  }
  if (score >= 10){
    textWeight(10);
    textStroke(0);
    text(200, 200, "You Loose");
  
  }
}

