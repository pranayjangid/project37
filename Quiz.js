class Quiz {
    constructor(){    }

  getState(){
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function (data){
          gameState = data.val();
      })
  }

  
  play(){
    //quiz.hide();
    question.hide();
    backgroundColor = "yellow";
    
    var resultTitle = createElement("h1");
    resultTitle.html("RESULTS");
    resultTitle.position(100,10);
    Person.getPersonInfo();
    console.log(allPeople);
    if(allPeople !== undefined){

      var display_pos = 130;
      var correctAnswer = 2;
      for(var ppl in allPeople){
        display_pos += 50;
        console.log(allPeople[ppl].answer);
        if (correctAnswer === allPeople[ppl].answer)
          fill("green")
        else
          fill("black");
        textSize(15);
        text(allPeople[ppl].name + ": " + allPeople[ppl].answer, 120,display_pos);
      }
    }
  }

  async start(){
      if(gameState === 0){
        person = new Person();
        var personCountRef = await database.ref('contestantCount').once("value");
        if(personCountRef.exists()){
          contestantCount = personCountRef.val();
          person.getCount();
        }
        question = new Question()
        question.display();
      }
  }


  update(state){
    console.log("inside  updateState");
    database.ref('/').update({
      gameState: state
    });
  }





}//end of js file