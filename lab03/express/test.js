const request = require('supertest');
const assert = require('assert')

const app = require("./server.js")

describe('GET', function () {
  it('responds with json', function (done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        assert(response, "get");
        done();
      })
      .catch(done);
  });
});

