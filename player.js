export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.state = [];
    this.currentState = currentState;
    this.image = document.getElementById("dogImage");
    this.width = 200;
    this.height = 181.83;
    this.x = 0;
    this.y = 0
  }
  draw(context){
    context.drawImage(this.image,this.x,this.y)
  }
}
