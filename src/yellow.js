class Yellow {
  constructor(elm, board) {
    this.elm = elm;
    this.board = board;
  }

  move() {
    this.x = this.x + 1;
    this.board.locate(this);
  }

  rival(alien){
    this.alien = alien;
  }
}

export default Yellow;
