class Board {
  constructor(elm) {
    this.elm = elm;
  }

  locate(koma) {
    const top = 15 + 59 * (koma.y - 1);
    const left = 15 + 59 * (koma.x - 1) + this.elm.offsetLeft;
    koma.elm.style.top = `${top}px`;
    koma.elm.style.left = `${left}px`;
  }

  randomMasu(koma) {
    koma.x = Math.floor(Math.random(10) * 8, 0) + 1;
    koma.y = Math.floor(Math.random(10) * 8, 0) + 1;
    this.locate(koma);
  }

  isOut(koma) {
    return koma.x < 1 || koma.x > 8 || koma.y < 1 || koma.y > 8;
  }

  sameMasu(koma1, koma2) {
    return koma1.x == koma2.x && koma1.y == koma2.y;
  }
}

export default Board;
