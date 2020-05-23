const boardClass = require('../lib/Board');

let boardManager;

module.exports = getComputerNextMovement = (board) => {

  boardManager = new boardClass(board);
  const playerPositions = boardManager.getPlayerPositions('x');
  const computerPositions = boardManager.getPlayerPositions('c');

  const canComputerWinIndex = boardManager.canPlayerWin(computerPositions);
  if (canComputerWinIndex !== false)  {
    console.log('aa');
    return canComputerWinIndex;
  }

  const canPlayerWinIndex = boardManager.canPlayerWin(playerPositions);
  if (canPlayerWinIndex !== false) {
    return canPlayerWinIndex;
  }

  if (!computerPositions.length) {
    return boardManager.getRandomEmptyIndex();
  }

  const canComputerContinueLineIndex = boardManager.canPlayerContinueLine(computerPositions);
  if (canComputerContinueLineIndex !== false) {
    console.log(canComputerContinueLineIndex);
    return canComputerContinueLineIndex;
  }

  return boardManager.getRandomEmptyIndex();
};
