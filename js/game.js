class Game {
  constructor() {}

  start() {
    form = new Form();
  }

  play() {
    reset.visible = false;
    gameOver.visible = false;
    score = score + Math.round(getFrameRate() / 60);
    text("Score= " + score, 1000, 50);
    text("Best=" + highScore, 1000, 65);

    if (keyDown("space") && mario.y > 450) {
      mario.velocityY = -10;
      //jumpSound.play()
    }
    mario.velocityY = mario.velocityY + 0.5;
    mario.collide(invisibleGround);

    ground.velocityX = -3;
    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
    spawn.clouds();
    spawn.obstacles();
    if (mario.isTouching(obstaclesGroup)) {
      gameState = END;

      // mario.changeAnimation("marioCollided", mario_collided);
      //dieSound.play()
    }
    /*
    if (score % 100 == 0 && score > 0) {
      //checkPointSound.play()
      ground.velocityX = ground.velocityX - 1;
    }
    */
    drawSprites();
  }

  end() {
    mario.visible = false;
    ground.velocityX = 0;
    cloudsGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.destroyEach();
    obstaclesGroup.destroyEach();
    cloudsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
    gameOver.visible = true;
    reset.visible = true;
    if (mousePressedOver(reset)) {
      this.reset();
    }
    drawSprites();
  }

  reset() {
    gameState = PLAY;
    mario.visible = true;

    reset.visible = false;
    gameOver.visible = false;
    ground.velocityX = -8;
    obstaclesGroup.destroyEach();
    cloudsGroup.destroyEach();
    mario.changeAnimation("running", mario_running);
    if (score > highScore) {
      highScore = score;
    }
    score = 0;
  }
}
