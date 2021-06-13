var player

var gameState = "play"
function setup(){
  over = createSprite(200,-1400,400,400)
  over.shapeColor = "limegreen"
player = createSprite(200,200,30,30)

barrier1 = createSprite(200,400,400,20)
barrier2 = createSprite(400,-400,20,1600)
barrier3 = createSprite(0,-400,20,1600)

obstacle1 = createSprite(425,75,20,20)
obstacle1.velocityX = -8.5

obstacle2 = createSprite(435,-150,20,20)
obstacle2.velocityX = -8.5

obstacle3 = createSprite(445,-375,20,20)
obstacle3.velocityX = -8.5


obstacle4 = createSprite(-25,-37.5,20,20)
obstacle4.velocityX = 8.5

obstacle5 = createSprite(-35,-262.5,20,20)
obstacle5.velocityX = 8.5

obstacle6 = createSprite(-45,-487.5,20,20)
obstacle6.velocityX = 8.5


obstacle7 = createSprite(425,-600,20,20)
obstacle7.velocityX = -8.5

obstacle8 = createSprite(435,-825,20,20)
obstacle8.velocityX = -8.5


obstacle9 = createSprite(-35,-712.5,20,20)
obstacle9.velocityX = 8.5

obstacle10 = createSprite(-45,-937.5,20,20)
obstacle10.velocityX = 8.5

end = createSprite(200,800,400,400)

}

function draw(){
  background("cyan")
player.collide(barrier1)
player.collide(barrier2)
player.collide(barrier3)

end.shapeColor = "darkorange"
if(gameState === "play"){
  if(keyDown("up")){
    player.y -= 5
  }
  if(keyDown("down")){
    player.y += 5
  }
  if(keyDown("left")){
    player.x -= 5
  }
  if(keyDown("right")){
    player.x += 5
  }
  end.velocityY = -3.95
  
}
 if(player.isTouching(end) || player.isTouching(obstacle1) || player.isTouching(obstacle2) || player.isTouching(obstacle3) || player.isTouching(obstacle4) || player.isTouching(obstacle5) || player.isTouching(obstacle6) || player.isTouching(obstacle7) || player.isTouching(obstacle8) || player.isTouching(obstacle9) || player.isTouching(obstacle10)){
gameState = "end"
  }

  if(player.isTouching(over)){
    gameState = "over"
    end.velocityY = 0
  }

  if(gameState === "end"){
    end.velocityY = 0
  }
 
  if(obstacle1.isTouching(barrier3)){
    obstacle1.x = 425
  }

  if(obstacle2.isTouching(barrier3)){
    obstacle2.x = 425
  }

  if(obstacle3.isTouching(barrier3)){
    obstacle3.x = 425
  }


  if(obstacle4.isTouching(barrier2)){
    obstacle4.x = -25
  }

  if(obstacle5.isTouching(barrier2)){
    obstacle5.x = -25
  }

  if(obstacle6.isTouching(barrier2)){
    obstacle6.x = -25
  }


  if(obstacle7.isTouching(barrier3)){
    obstacle7.x = 425
  }

  if(obstacle8.isTouching(barrier3)){
    obstacle8.x = 425
  }

  if(obstacle9.isTouching(barrier2)){
    obstacle9.x = -25
  }

  if(obstacle10.isTouching(barrier2)){
    obstacle10.x = -25
  }

  barrier1.visible = false
  //barrier2.visible = false
  //barrier3.visible = false

  camera.position.y = player.y

  drawSprites()
  text(player.x + "    " + player.y,player.x - 75,player.y - 75)

  if(gameState === "over"){
    textSize(40)
    textAlign(CENTER)
    fill("darkblue")
    stroke(0)
    text("YOU WIN!!!",player.x,player.y)
   
  }
  if(gameState === "end"){
    textAlign(CENTER)
    textSize(30)
    fill("darkblue")
    text("GAME OVER!",player.x, player.y)
  }

}