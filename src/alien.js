class Alien {
    constructor(elm, board) {
      this.elm = elm;
      this.board = board;
    }
  
    move() {
      this.board.move(this, -1, 0);
    }

    rival(yellow){
      this.yellow = yellow;
    }
  }
  
  export { Alien };
  