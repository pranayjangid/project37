var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allPeople;
var answer;
var database;

var question, person, quiz;

var backgroundColor = "pink";
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(backgroundColor);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
