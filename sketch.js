var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 
    //create 4 different surfaces
        surface1 = createSprite(710,580,170,20);
        surface1.shapeColor = "lightgreen";

        surface2 = createSprite(530,580,170,20);
        surface2.shapeColor = "pink";

        surface3 = createSprite(350,580,170,20);
        surface3.shapeColor = "grey";

        surface4 = createSprite(170,580,170,20);
        surface4.shapeColor = "lightblue";

    //create box sprite and give velocity
        box = createSprite(random(20,750),50,20,20);
        
        box.velocityY = 2;
        box.velocityX = 3;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprites and make box bouneOff from edges and surfaces
    edges = createEdgeSprites();
    box.bounceOff(edges);
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);

    //add condition to check if box touching surface and make it box
        if(surface1.isTouching(box) && box.bounceOff(surface1)){
            box.shapeColor = "lightgreen";
        }
        else {
            box.shapeColor = "white";
        }

        if(surface2.isTouching(box) && box.bounceOff(surface2)){
            box.shapeColor = "pink";
        }
        else {
            box.shapeColor = "white";
        }

        if(surface3.isTouching(box) && box.bounceOff(surface3)){
            box.shapeColor = "grey";
        }
        

        if(surface4.isTouching(box) && box.bounceOff(surface4)){
            box.shapeColor = "lightblue";
        }
        
    drawSprites();
}
