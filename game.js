var cats = 1;
var deadCats = 0;
var graveyardArea = 100;
var expandableArea = 0;
var unusedGraveyardArea = 100;
var graves = 0;

var title = new Title('clicker game');

var rowSectionA = new Section('row');
var rowSectionB = new Section('row');
var rowSectionC = new Section('row');
var rowSectionD = new Section('row');
var rowSectionE = new Section('row');
var rowSectionF = new Section('row');
var rowSectionG = new Section('row');
var rowSectionH = new Section('row');
var column1A = new Section('col');    
var column2A = new Section('col'); 
var column1B = new Section('col');    
var column2B = new Section('col'); 
var column1C = new Section('col');    
var column2C = new Section('col'); 
var column1D = new Section('col');    
var column2D = new Section('col'); 
var column1E = new Section('col');    
var column2E = new Section('col'); 
var column1F = new Section('col');    
var column2F = new Section('col'); 
var column1G = new Section('col');    
var column2G = new Section('col'); 
var column1H = new Section('col');    
var column2H = new Section('col'); 


var addCat = new Button('Adopt Cat', adoptCat);
var burryCat = new Button('Burry Cat', burryCat);
var expandGraveyard = new Button('Expand Graveyard', expandGraveyard);
var buyFood = new Button ('Buy Food' ,buyFood);
var buyToy = new Button ('Buy Toy' ,buyToy);


var numberOfCats = new Text("Cats: " + cats);
var numberOfDeadCats = new Text("Dead Cats: " + deadCats);
var sizeOfGraveyard = new Text("Graveyard Area: " + graveyardArea + " square feet")
var unusedGraveyard = new Text("Unused Graveyard Area: " + unusedGraveyardArea + " square feet")
var numberOfGraves = new Text("Number of Graves: " + graves)
var numberOfToys = new Text("Unused Graveyard Area: " + unusedGraveyardArea + " square feet")
var amountOfFood = new Text("Number of Graves: " + graves)



column1A.add(addCat);
column1B.add(burryCat);
column2A.add(numberOfCats);
column2B.add(numberOfDeadCats);
column1C.add(expandGraveyard);
column2C.add(sizeOfGraveyard);
column2D.add(unusedGraveyard);
column2E.add(numberOfGraves);
column1D.add(buyFood);
column1E.add(buyToy);

rowSectionA.add(column1A);  
rowSectionA.add(column2A);
rowSectionB.add(column1B);  
rowSectionB.add(column2B);
rowSectionC.add(column1C);  
rowSectionC.add(column2C);
rowSectionD.add(column1D);  
rowSectionD.add(column2D);
rowSectionE.add(column1E);  
rowSectionE.add(column2E);

setInterval (killCat, 10000)

function adoptCat() {
  cats = cats + 1;
  numberOfCats.edit("Cats: " + cats);
  
}
function burryCat() {
  if(deadCats > 0 && unusedGraveyardArea > 14){
    deadCats = deadCats + -1;
    unusedGraveyardArea = unusedGraveyardArea + -15;
    graves = graves + 1;
    numberOfDeadCats.edit("Dead Cats: " + deadCats);
    unusedGraveyard.edit("Unused Graveyard Area: " + unusedGraveyardArea + " square feet");
    numberOfGraves.edit("Number Of Graves: " + graves);
  }
}
function killCat() {
  cats = cats + -1;
  deadCats = deadCats + 1;
  numberOfCats.edit("Cats: " + cats);
  numberOfDeadCats.edit("Dead Cats: " + deadCats);
 
}
function expandGraveyard() {
  graveyardArea = graveyardArea + 10;
  unusedGraveyardArea = unusedGraveyardArea + 10;
  sizeOfGraveyard.edit("Graveyard Area: " + graveyardArea + " square feet");
  unusedGraveyard.edit("Unused Graveyard Area: " + unusedGraveyardArea + " square feet");

}
function buyFood() {
  
}
function buyToy() {
  
}

