const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const STATUS = require('../status');


chai.use(chaiHttp);
chai.should();

describe("Check board tests", () => {
  it("Should be 500 error (empty array in body)", (done) => {
    chai.request(app)
      .post('/checkBoardStatus')
      .send({board: []})
      .end((err, res) => {
        res.body.status.should.equal(STATUS.ERROR);
        res.should.have.status(500);
        done();
      });
  });

  it("Should be 500 error (incorrect lenght of array in body)", (done) => {
    chai.request(app)
      .post('/checkBoardStatus')
      .send({board: [null, null]})
      .end((err, res) => {
        res.body.status.should.equal(STATUS.ERROR);
        res.should.have.status(500);
        done();
      });
  });

  it("Should be 500 error (player positions are bigger than server positions)", (done) => {
    chai.request(app)
      .post('/checkBoardStatus')
      .send({board: [null, null, null, null, 'c', 'x', 'x', 'x', null]})
      .end((err, res) => {
        res.body.status.should.equal(STATUS.ERROR);
        res.should.have.status(500);
        done();
      });
  });

  it("Should be 200 and Human player wins", (done) => {
    chai.request(app)
      .post('/checkBoardStatus')
      .send({board: ['x', 'x', 'x', 'c', 'c', 'x', 'c', 'c', null]})
      .end((err, res) => {
        res.body.status.should.equal(STATUS.WIN);
        res.should.have.status(200);
        done();
      });
  });

  it("Should be 200 and Computer player wins", (done) => {
    chai.request(app)
      .post('/checkBoardStatus')
      .send({board: ['c', 'c', 'c', 'x', 'x', 'c', 'x', 'x', null]})
      .end((err, res) => {
        res.body.status.should.equal(STATUS.LOOSE);
        res.should.have.status(200);
        done();
      });
  });

  it("Should be 200 and there is a Tie", (done) => {
    chai.request(app)
      .post('/checkBoardStatus')
      .send({board: ["c", "x", "c", "x", "c", "x", "x", "c", "x"]})
      .end((err, res) => {
        res.body.status.should.equal(STATUS.TIE);
        res.should.have.status(200);
        done();
      });
  });
});