var cats = 1;
var deadCats = 0;
var graveyardArea = 100;
var expandableArea = 0;

var title = new Title('clicker game');

var rowSectionA = new Section('row');
var rowSectionB = new Section('row');
var rowSectionC = new Section('row');
var rowSectionD = new Section('row');
var column1A = new Section('col');    
var column2A = new Section('col'); 
var column1B = new Section('col');    
var column2B = new Section('col'); 
var column1C = new Section('col');    
var column2C = new Section('col'); 
var column1D = new Section('col');    
var column2D = new Section('col'); 

var addCat = new Button('Adopt Cat', btnPress);
var burryCat = new Button('Burry Cat', btnPress2);
var killCat = new Button('Kill Cat', btnPress3);
var expandGraveyard = new Button('expand graveyard', btnPress4);
var numberOfCats = new Text("Cats: " + cats);
var numberOfDeadCats = new Text("Dead Cats: " + deadCats);

column1A.add(addCat);
column1B.add(burryCat);
column2A.add(numberOfCats);
column2B.add(numberOfDeadCats);

rowSectionA.add(column1A);  
rowSectionA.add(column2A);
rowSectionB.add(column1B);  
rowSectionB.add(column2B);
rowSectionC.add(column1C);  
rowSectionC.add(column2C);
rowSectionD.add(column1D);  
rowSectionD.add(column2D);

setInterval (btnPress3, 10000)

function btnPress() {
  cats = cats + 1;
  numberOfCats.edit("Cats: " + cats);
  
}
function btnPress2() {
  deadCats = deadCats + -1;
  numberOfDeadCats.edit("Dead Cats: " + deadCats);
 
}
function btnPress3() {
  cats = cats + -1;
  deadCats = deadCats + 1;
  numberOfCats.edit("Cats: " + cats);
  numberOfDeadCats.edit("Dead Cats: " + deadCats);
 
}
function btnPress4() {
  cats = cats + -1;
  deadCats = deadCats + 1;
  numberOfCats.edit("Graveyard Area: " + graveyardArea + "ft");
  
 
}

