var score = 5;

postToPage(score);

createButton('1', btnPress);
createButton('-1', btnPress2);
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

function btnPress() {
  score = score + 1;
  postToPage(score);
}
function btnPress2() {
  score = score + -0.25;
  postToPage(score);
}

if (score <= 0){
  textWeight(10);
  
  text(You win);

}