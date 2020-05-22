
module.exports = class BoardService {

  constructor(board) {
    this.board = board;
    this.winPossibilites = [
      [0,1,2], [3,4,5], [6,7,8], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
    ];
  }

  toString() {
    console.log('To string', this.board);
  }
};
