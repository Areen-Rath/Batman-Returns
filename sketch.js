const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var thunder, thunder1, thunder2, thunder3, thunder4;
var manImg;
var man, umbrella;

var maxDrops = 100;
var drops = [];

var thunderCreatedFrame;

function preload(){
    manImg = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png",
    "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png")

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400, 600);

    engine = Engine.create();
    world = engine.world;

    man = createSprite(200, 490, 10, 10);
    man.addAnimation("manAnim", manImg);
    man.scale = 0.3;

    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drop(Math.round(random(0, 400)), Math.round(random(0, 400))));
    }

    umbrella = new Umbrella();
}

function draw(){
    background("black");

    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
    }

    spawnThunder();

    drawSprites();
}

function spawnThunder(){
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(Math.round(random(10, 370)), 0, 10, 10);

        var rand = Math.round(random(1, 4));

        switch(rand){
            case 1:
                thunder.addImage(thunder1);
                break;
            case 2:
                thunder.addImage(thunder2);
                break;
            case 3:
                thunder.addImage(thunder3);
                break;
            case 4:
                thunder.addImage(thunder4);
                break;
            default:
                break;
        }

        thunder.scale = random(0.3, 0.6);
    }

    if(frameCount > thunderCreatedFrame + 10){
        thunder.destroy();
    }
}