class Spawn {
  constructor() {}

  clouds() {
    if (frameCount % 80 == 0) {
      var cloudHeight = Math.round(random(50, 300));
      var clouds = createSprite(1200, cloudHeight, 20, 10);
      clouds.addImage(cloud_image);
      clouds.scale = 0.5;
      clouds.velocityX = -2;
      clouds.lifetime = 800;
      cloudsGroup.add(clouds);
    }
  }

  obstacles() {
    if (frameCount % 200 == 0) {
      var obstacles = createSprite(1400, 400, 50, 20);
      obstacles.scale = 0.5;
      obstacles.velocityX = -5 - score / 100;
      obstacles.lifetime = 500;
      obstaclesGroup.add(obstacles);
      var selectObstacles = Math.round(random(1, 4));
      switch (selectObstacles) {
        case 1:
          obstacles.addImage(obstacle1Image);
          break;
        case 2:
          obstacles.addImage(obstacle2Image);
          break;
        case 3:
          obstacles.addImage(obstacle3Image);
          break;
        case 4:
          obstacles.addImage(obstacle4Image);
          break;
        default:
          break;
      }
    }
  }
}
