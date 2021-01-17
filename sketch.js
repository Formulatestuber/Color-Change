var canvas;
var music;
var movingrectangle;
var bluerectangle, redrectangle, yellowrectangle, greenrectangle;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(400,400);

    movingrectangle = createSprite (200,200,20,20);

    bluerectangle = createSprite (50,400,100,30);
    bluerectangle.shapeColor = "blue";

    yellowrectangle = createSprite (150,400,100,30);
    yellowrectangle.shapeColor = "yellow";

    redrectangle = createSprite (250,400,100,30);
    redrectangle.shapeColor = "red";

    greenrectangle = createSprite (350,400,100,30);
    greenrectangle.shapeColor = "green"

}

function draw() {
    background(400);
    
    movingrectangle.x = World.mouseX;
    movingrectangle.y = World.mouseY;

    if (bluerectangle.x - movingrectangle.x < bluerectangle.width/2 + movingrectangle.width/2
        && movingrectangle.x - bluerectangle.x < movingrectangle.width/2 + bluerectangle.width/2
        && bluerectangle.y - movingrectangle.y < bluerectangle.height/2 + movingrectangle.height/2
        && movingrectangle.y - bluerectangle.y < movingrectangle.height/2 + bluerectangle.height/2){

        movingrectangle.shapeColor = "blue"
        }

    if (yellowrectangle.x - movingrectangle.x < yellowrectangle.width/2 + movingrectangle.width/2
        && movingrectangle.x - yellowrectangle.x < movingrectangle.width/2 + yellowrectangle.width/2
        && yellowrectangle.y - movingrectangle.y < yellowrectangle.height/2 + movingrectangle.height/2
        && movingrectangle.y - yellowrectangle.y < movingrectangle.height/2 + yellowrectangle.height/2){

        movingrectangle.shapeColor = "yellow"
        }

    if (redrectangle.x - movingrectangle.x < redrectangle.width/2 + movingrectangle.width/2
        && movingrectangle.x - redrectangle.x < movingrectangle.width/2 + redrectangle.width/2
        && redrectangle.y - movingrectangle.y < redrectangle.height/2 + movingrectangle.height/2
        && movingrectangle.y - redrectangle.y < movingrectangle.height/2 + redrectangle.height/2){

        movingrectangle.shapeColor = "red"
        }

    if (greenrectangle.x - movingrectangle.x < greenrectangle.width/2 + movingrectangle.width/2
        && movingrectangle.x - greenrectangle.x < movingrectangle.width/2 + greenrectangle.width/2
        && greenrectangle.y - movingrectangle.y < greenrectangle.height/2 + movingrectangle.height/2
        && movingrectangle.y - greenrectangle.y < movingrectangle.height/2 + greenrectangle.height/2){

        movingrectangle.shapeColor = "green"
        }

    drawSprites();
}
