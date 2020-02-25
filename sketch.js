var sun;
var Bplanet,Rplanet,Gplanet;
function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background("black"); 
  
  fill("black");
  stroke("white");
 ellipse(250,250,480);

  fill("black");
  stroke("white");
  ellipse(250,250,360);

  fill("black");
  stroke("white");
  ellipse(250,250,260);

  fill("yellow");
 strokeWeight(15);
 stroke("gold");
 sun = ellipse(250,250,130);

  fill("red");
 strokeWeight(7);
 stroke("darkred");
 Rplanet = ellipse(80,200,60);

  fill("blue");
 strokeWeight(7);
 stroke("darkblue");
 Bplanet = ellipse(400,60,60);

  fill("green");
 strokeWeight(7);
 stroke("darkgreen");
 Gplanet = ellipse(310,360,60);

  drawSprites();
}