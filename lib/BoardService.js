
module.exports = class BoardService {

  constructor(board) {
    this.board = board;
  }

  toString() {
    console.log('To string', this.board);
  }
};

