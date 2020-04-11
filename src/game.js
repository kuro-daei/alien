import { Board, ErrorKomaPlace } from "./board";
import { Alien } from "./alien";
import { Yellow } from "./yellow";

class Game {
  constructor() {
    const board = new Board(document.getElementById("board"));
    const alien = new Alien(document.getElementById("alien"), board);
    const yellow = new Yellow(document.getElementById("yellow"), board);

    alien.x = 7;
    alien.y = 3;
    yellow.x = 4;
    yellow.y = 4;

    alien.rival(yellow);
    yellow.rival(alien);

    board.locate(alien);
    board.locate(yellow);

    const messge = document.getElementById("message");
    message.innerText = "スタート!";

    const button = document.getElementById("button");
    button.addEventListener("click", () => {
      yellow.move();
      alien.move();
      if (yellow.x == alien.x && yellow.y == alien.y) {
        message.innerText = '地球防衛軍にエイリアンが捕まりました。';
        button.disabled = true;
      }
    });
  }
}

export default Game;
