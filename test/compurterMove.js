const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const STATUS = require('../status');


chai.use(chaiHttp);
chai.should();


describe("Computer move tests", () => {
  it("Should prevent the human player from winning", (done) => {
    chai.request(app)
      .post('/computerMove')
      .send({board: ['x', 'x', null, null ,null ,null ,null ,null, null]})
      .end((err, res) => {
        res.body.newBoard.should.eql(['x', 'x', 'c', null ,null ,null ,null ,null, null]);
        res.should.have.status(200);
        done();
      });
  });

  it("Should win if has any possibility", (done) => {
    chai.request(app)
      .post('/computerMove')
      .send({board: ['c', 'c', null, null ,null ,null ,null ,null, null]})
      .end((err, res) => {
        res.body.newBoard.should.eql(['c', 'c', 'c', null ,null ,null ,null ,null, null]);
        res.should.have.status(200);
        done();
      });
  });

});
