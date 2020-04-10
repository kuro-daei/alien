class ErrorKomaPlace extends Error {
  constructor(message) {
    super(message);
  }
}

class Board {
  constructor(elm) {
    this.elm = elm;
    this.lastError = '';
  }

  locate(koma) {
    const top = 15 + 59 * (koma.y - 1);
    const left = 15 + 59 * (koma.x - 1) + this.elm.offsetLeft;
    koma.elm.style.top = `${top}px`;
    koma.elm.style.left = `${left}px`;
    if (koma.x < 1 || koma.x > 8 || koma.y < 1 || koma.y > 8) {
      throw new ErrorKomaPlace('駒が外に出ました。');
    }
  }

  move(koma, shiftX, shiftY) {
    if (!(shiftX == 0 || shiftY == 0 || Math.abs(shiftX) == 1 || Math.abs(shiftY) == 1)) {
      throw new ErrorKomaPlace('移動量が不正です。');
    }
    koma.x = koma.x + shiftX;
    koma.y = koma.y + shiftY;
    this.locate(koma);
    if (koma.x < 1 || koma.x > 8 || koma.y < 1 || koma.y > 8) {
      throw new ErrorKomaPlace('駒が外に出ました。');
    }
  }

}

export { Board, ErrorKomaPlace };
