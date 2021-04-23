var balloon;
var city;
var balloonPosition;
function preload() {
city =loadImage("project-image-c34and-c35-main/C35/cityImage.png");

}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  balloon =createSprite(400, 200, 50, 50);
  position = this.position;
}

function draw() {
  background(city);  
  textSize(20);
  fill("blue");
  stroke("green");
  text("** Use arrow keys to move hot air balloon **");
  drawSprites();
  balloon.display();
   
  if(keyDown(LEFT_ARROW)) {
balloon.x =balloon.x -10;
  }

  if(keyDown(RIGHT_ARROW)) {
    balloon.x =balloon.x +10;
      }

      if(keyDown(UP_ARROW)) {
      updateHeight(0,-10);
     //balloon.addAnimation("hotAirBalloon",balloonImage2);
     balloon.scale=balloon.scale -0.01;
          }

          if(keyDown(DOWN_ARROW)) {
            balloon.y =balloon.y +10;
              }

}
function updateHeight(x,y) {
  database.ref('balloon/height').set({
    'x': position.x+x ,
    'y': position.y+y
  })
}

function readHeight(data) {
height =data.val;
balloon.x =height.x;
balloon.y =height.y;

}



function showError() {
  console.log("Error in writing to the database");
}
