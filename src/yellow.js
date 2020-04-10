class Yellow {
  constructor(elm, board) {
    this.elm = elm;
    this.board = board;
  }

  move() {
    this.board.move(this, 1, 0);
  }

  rival(alien){
    this.alien = alien;
  }
}

export { Yellow };
