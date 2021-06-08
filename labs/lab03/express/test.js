const request = require('supertest');
const assert = require('assert')

const app = require("./server.js")

describe('GET', function () {
  it('responds with json', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        assert(response, "get");
        done();
      })
      .catch(done);
  });
});

describe('POST', function () {
  it('responds with json', function (done) {
    request(app)
      .post('/')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        assert(response, "post");
        done();
      })
      .catch(done);
  });
});

describe('PUT', function () {
  it('responds with json', function (done) {
    request(app)
      .put('/')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        assert(response, "put");
        done();
      })
      .catch(done);
  });
});

describe('DELETE', function () {
  it('responds with json', function (done) {
    request(app)
      .delete('/')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        assert(response, "delete");
        done();
      })
      .catch(done);
  });
});
