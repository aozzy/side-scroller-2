export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.state = [];
    this.currentState = this.state[0];
    this.image = document.getElementById("dogImage");
    this.width = 200;
    this.height = 181.83;
    this.x = 100;
    this.y = 200
  }
  draw(context){
    context.drawImage(this.image,this.x,this.y,600,800)
  }
}
