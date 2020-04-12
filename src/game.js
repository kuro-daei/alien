import { Board, ErrorKomaPlace } from "./board";
import { Alien } from "./alien";
import { Yellow } from "./yellow";

class Game {
  constructor() {
    const board = new Board(document.getElementById("board"));
    const alien = new Alien(document.getElementById("alien"), board);
    const yellow = new Yellow(document.getElementById("yellow"), board);
    const tern = document.getElementById("tern");
    let i = 0;

    alien.rival(yellow);
    yellow.rival(alien);

    function showTern(){
      tern.innerText = `ターン : ${i}`;
    }

    function init(){
      alien.x = 7;
      alien.y = 3;
      yellow.x = 4;
      yellow.y = 3;
      board.locate(alien);
      board.locate(yellow);
      i = 0;
      showTern();
    }

    init();

    document.addEventListener('keyup', (event) => {
      console.log(`KEY : ${event.key}`);
      yellow.move(event.key);
      alien.move();
      if (yellow.x == alien.x && yellow.y == alien.y) {
        alert('地球防衛軍にエイリアンが捕まりました。');
        init();
      }
      i = i + 1;
      showTern();
    }, false);
  }
}

export default Game;
