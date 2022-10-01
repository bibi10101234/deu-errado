var path,Runner, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
 path=createSprite (200,200);
 path.addImage(pathImg);
 path.velocityY = 4; 
 path.scale=1.2;

 //Criando menino que corre 
 Runner=createSprite(200,200);
 Runner.addAnimation("boy",boyImg)
 Runner.scale=0.3;

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 

}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
Runner.collide(edges[3]);
Runner.collide(leftBoundary);
Runner.collide(rightBoundary)


 //Reiniciar o fundo
 



 drawSprites();

 }




