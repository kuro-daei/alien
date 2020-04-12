class Yellow {
  constructor(elm, board) {
    this.elm = elm;
    this.board = board;
    this.x;
    this.y;
    this.dx = -1;
  }

  move(key) {
    console.log(`地球防衛軍 - ${this.x}, ${this.y}`);
    if( this.x == 1 || this.x == 8 ){
      this.dx = this.dx * -1;
    }
    this.board.move(this, this.dx, 0);
  }

  rival(alien) {
    this.alien = alien;
  }
}

export { Yellow };
