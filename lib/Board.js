module.exports = class Board {

  constructor(board) {
    this.board = board;
    this.winPossibilites = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
  }

  /*
    Gets player character and returns sorted array of indexes in board
   */
  getPlayerPositions(player) {
    return this.board.map((value, index) => {
      if (value === player) {
        return index;
      }
    }).filter(element => element !== null && element !== undefined);
  }

  /*
    Gets player positions and checks if has coincidences in win possibilities
   */
  hasLine(playerPositions) {
    let response = false;

    this.winPossibilites.forEach(winPossibility => {
      const flag = winPossibility.every(winPossibilityValue => playerPositions.indexOf(winPossibilityValue) > -1);

      if (flag) response = true;
    });

    return response;
  }

  /*
    Gets player positions as params and checks if has any free line to continue moving
    Returns free line position index or false
   */
  canPlayerContinueLine(playerPositions) {
    let response = false;
    this.winPossibilites.some(winPossibility => {
      let filledIndexes = 0;
      let lastFilledIndex = undefined;
      winPossibility.forEach(position => {
        if (this.board[position]) { //If this position is filled in board
          filledIndexes++;
          lastFilledIndex = position;
        }
      });
      if (filledIndexes === 1 && playerPositions.includes(lastFilledIndex)) {
        winPossibility.some(position => {
          if (position !== lastFilledIndex) {
            response = position;
            return true;
          }
        })
      }
      return response !== false;
    });

    return response;
  }

  /*
    Returns index that is empty in board
   */
  getRandomEmptyIndex() {
    const emptyIndexes = this._getEmptyIndexes();
    const randomIndex = this._getRandomNumber(0, emptyIndexes.length);

    return emptyIndexes[randomIndex];
  }

  /*
    Checks if player can win in next movement and returns index for win movement or false
   */
  canPlayerWin(playerPositions) {
    let response = false;
    this.winPossibilites.some(winPossibility => {
      if (this._hasTwoOccurrencesInWinPossiblity(playerPositions, winPossibility)) {
        const winPossibilityEmptyIndex = this._hasWinPossibilityEmptyIndex(winPossibility);
        if (winPossibilityEmptyIndex !== false) {
          response = winPossibilityEmptyIndex;
          return true;
        }
      }
    });

    return response;
  }

  /*
    Gets a win possibility as param and checks if has any empty index in board
    Returns the index or false;
   */
  _hasWinPossibilityEmptyIndex(winPossibility) {
    const boardFilledIndexes = this._getBoardFilledIndexes();
    let index = false;

    winPossibility.forEach(winPossibilityIndex => {
      if (!boardFilledIndexes.includes(winPossibilityIndex)) index = winPossibilityIndex;
    });

    return index;
  }

  _getBoardFilledIndexes() {
    let filledIndexes = [];

    this.board.forEach((boardIndex, index) => {
      if (boardIndex) filledIndexes.push(index);
    });

    return filledIndexes;
  }

  /*
    Gets as parameter an array of player positions and a winPossibility array and checks if there are two occurrences.
    Returns true or false.
   */
  _hasTwoOccurrencesInWinPossiblity(arrayPositions, winPossibility) {
    let counter = 0;

    winPossibility.forEach(winPossibilityValue => {
      arrayPositions.includes(winPossibilityValue) && counter++;
    });

    return counter === 2;
  }

  _getEmptyIndexes() {
    const emptyIndexes = [];

    this.board.forEach((position, index) => {
      if (!position) emptyIndexes.push(index);
    });

    return emptyIndexes;
  }

  _getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
