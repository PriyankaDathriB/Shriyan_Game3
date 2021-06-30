var player,playerImg;
var timer,form,game;
var gameState = 0;
var playerCount = 0;
var database;
var allPlayers;
var player1, player2,players;
var health1, health2,healths, obsGroup, obsGroup, obs = [], obs1 = [], obs2 = [];

function preload(){
  playerImg = loadImage("man.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
 
  obsGroup = new Group();
  
  game = new Game();
  game.getState();
  game.start();
 
  spawnObs();
  
}

function draw() {
  background("black");
  
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
  
 
  
  
}


  function spawnObs() {
    var x, y;
    
    
   /* for(var i = 0; i< 25; i++){
      x = Math.round(random(50,width-50));
      y = Math.round(random(50,height-50));
      obs1.push(new Obstacle(x,y,1));   
    }
    for(var i = 0; i< 25; i++){
      x = Math.round(random(50,width-50));
      y = Math.round(random(50,height-50));
      obs2.push(new Obstacle(x,y,2));   
    }*/
    for(var i = 0; i< 100; i++){
      x = Math.round(random(50,width-50));
      y = Math.round(random(50,height-50));
      obs.push(new Obstacle(x,y,3));   
    }

 }


