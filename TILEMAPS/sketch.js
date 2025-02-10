let tileMap = []; //array to store tiles in 
let tilesX = 10; //how mny tiles on x axis
let tilesY = 10;  //how many tiles on y axis
let tileSize = 50; //how many pixls accros each tile

function setup() {
  createCanvas(500, 500);


  let tileID = 0
  for (let tileX = 0; tileX < tilesX; tileX++) {
    tileMap[tileX] = [];
    for (let tileY = 0; tileY < tilesY; tileY++) {
      tileMap[tileX][tileY] = new Tile(tileX, tileY, tileSize, tileID);
      tileID++;
    }
}
}

function draw() {
  background(0);

  for (let tileX = 0; tileX < tilesX; tileX++) {
    for (let tileY = 0; tileY < tilesY; tileY++) {
      tileMap[tileX][tileY].debugGrid();
    }
  }
  tileMap[5][6].displayMessage();
  tileMap[0][8].displayMessage();
  tileMap[3][4].displayMessage();
  tileMap[3][0].displayMessage();
}

class Tile {
constructor(tileX, tileY, tileSize, tileID) {
  this.tileX = tileX;
  this.tileY = tileY;
  this.xPos = this.tileX * tileSize;
  this.yPos = this.tileY * tileSize;
  this.tileSize = tileSize;
  this.tileID = tileID;
}

displayMessage() {
  let xPadding = 2;
  let yPadding = 40;
  strokeWeight(1);
  stroke("black");
  fill("white");
  textSize(10); 
  this.xPos + xPadding;
  this.yPos + yPadding;
  text("Accessed", this.xPos + xPadding, this.yPos + yPadding);
}

debugGrid() {
  let xPadding = 2;
  let yCoordinatePadding = 8;
  let yIDPadding = 18;

  //all text settings
  strokeWeight(1);
  stroke("black");
  fill("yellow");

  //displaying tile coordinates
  textSize(8)
  text("X: " + this.tileX + " Y: " + this.tileY, this.xPos + xPadding, this.yPos + yCoordinatePadding);

  //display tileID text
  textSize(8);
  text("ID:" + this.tileID, this.xPos + xPadding, this.yPos + yIDPadding);

  //create rect around tile
noFill();
stroke("yellow");
rect(this.xPos, this.yPos, this.tileSize, this.tileSize);
}
}
