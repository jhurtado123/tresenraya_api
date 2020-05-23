var express = require('express');
var router = express.Router();
const checkBoardStatus = require('../services/boardService');
const getComputerNextMovement = require('../services/computerMoveService');

router.post('/computerMove', (req, res, next) => {
  const {board} = req.body;
  const nextComputerPositionIndex = getComputerNextMovement(board);
  board[nextComputerPositionIndex] = 'c';
  const newBoard = board;

  setTimeout(() => {
    return res.status(200).json({newBoard});
  }, 1000);
});


router.post('/checkBoardStatus', (req, res, next) => {
  const {board} = req.body;
  const response = checkBoardStatus(board);

  return res.status(response.code).json({status: response.status})

});

module.exports = router;
