const boardClass = require('../lib/Board');
const STATUS = require('../status');

let boardManager;

module.exports = checkBoardStatus = (board) => {

  if (!board || !board.length || board.length !== 9) return  {code: 500, status: STATUS.ERROR};

  boardManager = new boardClass(board);
  const playerPositions = boardManager.getPlayerPositions('x');
  const computerPositions = boardManager.getPlayerPositions('c');

  if (playerPositions.length - computerPositions.length > 1) return  {code: 500, status: STATUS.ERROR};

  //Check if player or computer has won
  if (hasPlayerWon(playerPositions)) return {code: 200, status: STATUS.WIN};
  if (hasPlayerWon(computerPositions)) return {code: 200, status: STATUS.LOOSE};

  //Check if there is tie
  if (playerPositions.length + computerPositions.length === 9) return {code: 200, status: STATUS.TIE};

  return {code: 200, status: STATUS.BOARD_CHECKED};


};

function hasPlayerWon(positions) {
  return boardManager.hasLine(positions);
}