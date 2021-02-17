var exam ;
var girl;
var backgroundImg,girlImg,examImg,booksImg;
var booksGroup;;
var math,science,sst;
var bg;
var edges;
var PLAY = 1;
var END =0;
var gamestate = PLAY;
var gameOver,gameOverImg;
var score = 0;


function preload(){
backgroundImg = loadImage("school.jpg");
examImg = loadImage("1538.png_300 (1).png");
math = loadImage("71-712950_math-clipart-borders-transparent-math-clipart (1).png")
science = loadImage("download (1).png");
sst = loadImage("cartoon-history-book-illustration_csp34657322 (1).jpg")
girlImg = loadImage("94917405-vector-flat-frightened-teenage-girl-in-green-dress-running-away-female-cartoon-character-chasing-loo (1).jpg")
gameOverImg = loadImage("game over.jpg")
}
function setup(){
    createCanvas(800,800)
    booksGroup = new Group();
    girl= createSprite(600,600,70,70);
    bg = createSprite(400,400,800,800);
     
    


}
function draw(){
    background("white");
    text(mouseX+','+mouseY,mouseX,mouseY);
   if(gamestate === PLAY){
    girl.addImage(girlImg);
    bg.addImage(backgroundImg);
    
    girl.scale = 0.1;

   // console.log(girl.x, girl.y)
   
    booksGroup.scale= 0.5;
   //console.log(mouseX,mouseY);
    girl.depth = bg.depth;
    girl.depth = girl.depth +1;
    //console.log(girl.depth, bg.depth )
  
    if(keyDown(UP_ARROW)){
      girl.velocityY = -10;
      girl.velocityX = 0;
    }
    if(keyDown(LEFT_ARROW)){
      girl.velocityY = 0;
      girl.velocityX = -3;
    }
    if(keyDown(DOWN_ARROW)){
      girl.velocityY = 10;
      girl.velocityX = 0;
    }
    
  
    edges= createEdgeSprites();
    girl.bounceOff(edges);
    if(girl.isTouching(edges)){
      console.log(true)
      textSize(24)
      text("score="+score,700,100);
      score = score+5;
      console.log(score)
    }
    
    books();
   }
   
 
    //exam.addImage(examImg);
    
    if(girl.isTouching(booksGroup)){
      gamestate = END;
    }
    if(gamestate== END){
      girl.destroy();
      booksGroup.destroyEach();
      
      gameOver = createSprite(350,350,1500,1000);
      gameOver.addImage(gameOverImg);
      gameOver.scale = 1.4;
      //bg.changeAnimation("gameOver")
    }
    drawSprites();

}
function books(){
if(frameCount% 60 === 0){
  exam= createSprite(50,600,70,70);
   exam.y = Math.round(random(100,700))
  exam.velocityX = 6;
  var rand = Math.round(random(1,4))
  switch(rand){
    case 1 : exam.addImage(examImg)
    break;
    case 2 : exam.addImage(math)
    break;
    case 3 : exam.addImage(science)
    break;
    case 4 : exam.addImage(sst)
    break;
    default : break;
  }
  exam.scale = 0.5
  exam.lifetime = 100;
  booksGroup.add(exam)
}
}
