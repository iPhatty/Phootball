const test = require("tape");
const request = require("supertest");
const app = require("../app");

test("Test tape is running", t => {
  t.equal(1, 1, "Tape is working");
  t.end();
});

test("Home route access", t => {
  request(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
