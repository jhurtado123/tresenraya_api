var express = require('express');
var router = express.Router();
var boardClass = require('../lib/BoardService');

router.post('/computerMove', function(req, res, next) {
  const {board} = req.body;

  board[0] = 'o';
  const boardService = new boardClass(board);
  console.log(boardService.toString());

  setTimeout(() => {
    return res.status(200).json({board});
  }, 1000);
});

module.exports = router;
