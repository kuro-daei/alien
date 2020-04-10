import Board from "./board";
import Alien from "./alien";
import Yellow from "./yellow";

class Game {
  constructor() {
    const board = new Board(document.getElementById("board"));
    const alien = new Alien(document.getElementById("alien"), board);
    const yellow = new Yellow(document.getElementById("yellow"), board);
    alien.rival(yellow);
    yellow.rival(alien);
    board.randomMasu(alien);
    board.randomMasu(yellow);

    const messge = document.getElementById("message");
    message.innerText = "スタート!";

    const button = document.getElementById("button");
    button.addEventListener("click", () => {
      console.log('move');
      yellow.move();
      alien.move();
      if (board.isOut(yellow)){
        message.innerText = "イエローが場外負け!";
        button.disabled = true;
      }
      if (board.isOut(alien)){
        message.innerText = "エイリアンが場外負け!";
        button.disabled = true;
      }
      if (board.sameMasu(yellow, alien)){
        message.innerText = "エイリアンが倒さた!";
        button.disabled = true;
      }
    });
  }
}

export default Game;
