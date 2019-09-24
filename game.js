var score = 5;

var title = new Title('clicker game');

var rowSection = new Section('row');
var column1 = new Section('col');    
var column2 = new Section('col'); 

var addCat = new Button('Adopt Cat', btnPress);
var sub = new Button('-1', btnPress2);
var scoreBoard = new Text(score);

column1.add(addCat);
column1.add(sub);
column2.add(scoreboard);

rowSection.add(column1);  
rowSection.add(column2);


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
    text("You Loose");
  
  }
}
function btnPress2() {
  score = score + -0.25;
  scoreBoard.edit(score);
  if (score <= 0){
    textWeight(10);
    textStroke(0);
    text("You Win");
  
  }
  if (score >= 10){
    textWeight(10);
    textStroke(0);
    text("You Loose");
  
  }
}

