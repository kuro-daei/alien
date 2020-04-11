class Alien {
    constructor(elm, board) {
      this.elm = elm;
      this.board = board;
      this.x;
      this.y;
    }
  
    move() {
      console.log(`エイリアン - ${this.x}, ${this.y}`);
      this.board.move(this, 0, 0);
    }

    rival(yellow){
      this.yellow = yellow;
    }
  }
  
  export { Alien };
  