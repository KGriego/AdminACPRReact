const supertest = require("supertest");
const should = require("should");

// This agent refers to PORT where program is runninng.
// 3000 for client side, 3010 for server side
const server = supertest.agent("http://localhost:3000");
const proxyServer = supertest.agent("http://localhost:3010");

// UNIT test begin

describe("getting to homepage", () => {
  // #1 should return home page
  it("should return the home page", done => {
    // calling home page api
    server
      .get("/")
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        const error = res.error;
        should(error).equal(false);
        done();
      });
  });
});

//-----------------Can't get second page as it isn't rendered?? -----------------
// describe("getting to adding phone page", () => {
//   // #1 should return home page
//   it("should return the add new phone page", done => {
//     // calling home page api
//     server
//       .get("/addNew")
//       .expect("Content-type", /json/)
//       .expect(200) // THis is HTTP response
//       .end((err, res) => {
//         // HTTP status should be 200
//         res.status.should.equal(200);
//         // Error key should be false.
//         const error = res.error;
//         should(error).equal(false);
//         done();
//       });
//   });
// });

describe("Should get list from database", () => {
  //#2 getting response from database
  it("should get from the database", done => {
    //calling get phones from database
    proxyServer
      .get("/api/getFromDatabase")
      .expect("Content-type", /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        const error = res.error;
        should(error).equal(false);
        done();
      });
  });
});

// describe("Should add new phone from database", () => {
//   it("should add a new phone to the database", function(done) {
//     //calling add to database
//     proxyServer
//       .post("/api/addToDatabase")
//       .send({
//         name: "NewName",
//         phoneNumber: "523856845",
//         device: "Iphone 7+",
//         issue: "Broken Screen",
//         repairStatus: "Brought In"
//       })
//       .expect("Content-type", /json/)
//       .expect(200)
//       .end((err, res) => {
//         res.status.should.equal(200);
//         const error = res.error;
//         should(error).equal(false);
//         done();
//       });
//   });
// });
