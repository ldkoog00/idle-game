var score = 5;

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

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
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}

