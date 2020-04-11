class Yellow {
  constructor(elm, board) {
    this.elm = elm;
    this.board = board;
    this.x;
    this.y;
  }

  move() {
    console.log(`地球防衛軍 - ${this.x}, ${this.y}`);
    this.board.move(this, -1, 0);
  }

  rival(alien) {
    this.alien = alien;
  }
}

export { Yellow };
