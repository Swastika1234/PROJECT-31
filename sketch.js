const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops=[]
var maxDrops=100



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    if(frameCount%150===0){
        for (var i=0;i<maxDrops;i++){
            drops.push(new Drop(random(0,400),random(0,400)))
        }
    }

   
    
}

function draw(){
    Engine.update(engine)
    background("lightblue")
    for(var i=0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
}   

