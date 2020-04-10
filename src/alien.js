class Alien {
    constructor(elm, board) {
      this.elm = elm;
      this.board = board;
    }
  
    move() {
      this.y = this.y + 1;
      this.board.locate(this);
    }

    rival(yellow){
      this.yellow = yellow;
    }
  }
  
  export default Alien;
  