class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hidecomponents()
    Player.readplayerdetails()
    if(aVariableName != undefined){
      var yPosition = 100
      for(var forLoopElement in aVariableName){
        if(forLoopElement=="player"+player.index){
          fill("blue")
        }
        text(aVariableName[forLoopElement].name+":"+aVariableName[forLoopElement].distance, 100,yPosition)
        yPosition = yPosition+50
      }
    }
    if(keyIsDown("up")&&player.index != null){
      player.distance=player.distance+25
      player.update()
    }
  }
}
