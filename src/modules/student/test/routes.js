"use strict";
var request = require("supertest"),
  assert = require("assert"),
  config = require("../../../config/config"),
  _ = require("lodash"),
  jwt = require("jsonwebtoken"),
  mongoose = require("mongoose"),
  app = require("../../../config/express"),
  Student = mongoose.model("Student");

var credentials, token, mockup;

describe("Student CRUD routes tests", function() {
  before(function(done) {
    mockup = {
        room: "1",
        studentnumber: "1",
        studentid: "00001",
        prefix: "เด็กชาย",
        firstname: "สมชาย",
        lastname: "สุขสบาย",
        identificationnumber: "1322103387129",
        attendancedate: {
          day: "1",
          month: "08",
          year: "2562"
        },
        oldschool: "โรงเรียนอนุบาลหมีน้อย",
        province: "ปทุมธานี",
        lastfloor: "ประถมศึกษาปีที่4",
        birthday: {
          day: "12",
          month: "09",
          year: "2540"
        },
        sex: "ชาย",
        nationality: "ไทย",
        religion: "พุทธ",
        fatherfullname: "ธีระศักดิ์",
        motherfullname: "กันทิมา",
        pp1set: "1",
        pp1number: "1",
        pp2number: "3",
        enddateofapproval: {
          day: "11",
          month: "10",
          year: "2563"
        },
        approvaldate: {
          day: "15",
          month: "01",
          year: "2564"
        },
        cause: "ย้ายโรงเรียน"
      };
    credentials = {
      username: "username",
      password: "password",
      firstname: "first name",
      lastname: "last name",
      email: "test@email.com",
      roles: ["user"]
    };
    token = jwt.sign(_.omit(credentials, "password"), config.jwt.secret, {
      expiresIn: 2 * 60 * 60 * 1000
    });
    done();
  });

  it("should be Student get use token", done => {
    request(app)
      .get("/api/students")
      .set("Authorization", "Bearer " + token)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        var resp = res.body;
        done();
      });
  });

  it("should be Student get by id", function(done) {
    request(app)
      .post("/api/students")
      .set("Authorization", "Bearer " + token)
      .send(mockup)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var resp = res.body;
        request(app)
          .get("/api/students/" + resp.data._id)
          .set("Authorization", "Bearer " + token)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }
            var resp = res.body;
            assert.equal(resp.status, 200);
            assert.equal(resp.data.room, mockup.room);
            assert.equal(
              resp.data.studentnumber,
              mockup.studentnumber
            );
            assert.equal(resp.data.studentid, mockup.studentid);
            assert.equal(resp.data.prefix, mockup.prefix);
            assert.equal(resp.data.firstname, mockup.firstname);
            assert.equal(resp.data.lastname, mockup.lastname);
            assert.equal(
              resp.data.identificationnumber,
              mockup.identificationnumber
            );

            assert.equal(
              resp.data.attendancedate.day,
              mockup.attendancedate.day
            );
            assert.equal(
              resp.data.attendancedate.month,
              mockup.attendancedate.month
            );
            assert.equal(
              resp.data.attendancedate.year,
              mockup.attendancedate.year
            );

            assert.equal(resp.data.oldschool, mockup.oldschool);
            assert.equal(resp.data.province, mockup.province);
            assert.equal(resp.data.lastfloor, mockup.lastfloor);

            assert.equal(
              resp.data.birthday.day,
              mockup.birthday.day
            );
            assert.equal(
              resp.data.birthday.month,
              mockup.birthday.month
            );
            assert.equal(
              resp.data.birthday.year,
              mockup.birthday.year
            );

            assert.equal(resp.data.sex, mockup.sex);
            assert.equal(
              resp.data.nationality,
              mockup.nationality
            );
            assert.equal(resp.data.religion, mockup.religion);
            assert.equal(resp.data.fatherfullname, mockup.fatherfullname);
            assert.equal(resp.data.motherfullname, mockup.motherfullname);
            assert.equal(resp.data.pp1set, mockup.pp1set);
            assert.equal(resp.data.pp1number, mockup.pp1number);
            assert.equal(resp.data.pp2number, mockup.pp2number);

            assert.equal(
              resp.data.enddateofapproval.day,
              mockup.enddateofapproval.day
            );
            assert.equal(
              resp.data.enddateofapproval.month,
              mockup.enddateofapproval.month
            );
            assert.equal(
              resp.data.enddateofapproval.year,
              mockup.enddateofapproval.year
            );

            assert.equal(
              resp.data.approvaldate.day,
              mockup.approvaldate.day
            );
            assert.equal(
              resp.data.approvaldate.month,
              mockup.approvaldate.month
            );
            assert.equal(
              resp.data.approvaldate.year,
              mockup.approvaldate.year
            );

            assert.equal(resp.data.cause, mockup.cause);

            done();
          });
      });
  });

  it("should be Student post use token", done => {
    request(app)
      .post("/api/students")
      .set("Authorization", "Bearer " + token)
      .send(mockup)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var resp = res.body;
        assert.equal(resp.data.room, mockup.room);
        assert.equal(
          resp.data.studentnumber,
          mockup.studentnumber
        );
        assert.equal(resp.data.studentid, mockup.studentid);
        assert.equal(resp.data.prefix, mockup.prefix);
        assert.equal(resp.data.firstname, mockup.firstname);
        assert.equal(resp.data.lastname, mockup.lastname);
        assert.equal(
          resp.data.identificationnumber,
          mockup.identificationnumber
        );

        assert.equal(
          resp.data.attendancedate.day,
          mockup.attendancedate.day
        );
        assert.equal(
          resp.data.attendancedate.month,
          mockup.attendancedate.month
        );
        assert.equal(
          resp.data.attendancedate.year,
          mockup.attendancedate.year
        );

        assert.equal(resp.data.oldschool, mockup.oldschool);
        assert.equal(resp.data.province, mockup.province);
        assert.equal(resp.data.lastfloor, mockup.lastfloor);

        assert.equal(
          resp.data.birthday.day,
          mockup.birthday.day
        );
        assert.equal(
          resp.data.birthday.month,
          mockup.birthday.month
        );
        assert.equal(
          resp.data.birthday.year,
          mockup.birthday.year
        );

        assert.equal(resp.data.sex, mockup.sex);
        assert.equal(resp.data.nationality, mockup.nationality);
        assert.equal(resp.data.religion, mockup.religion);
        assert.equal(resp.data.fatherfullname, mockup.fatherfullname);
        assert.equal(resp.data.motherfullname, mockup.motherfullname);
        assert.equal(resp.data.pp1set, mockup.pp1set);
        assert.equal(resp.data.pp1number, mockup.pp1number);
        assert.equal(resp.data.pp2number, mockup.pp2number);

        assert.equal(
          resp.data.enddateofapproval.day,
          mockup.enddateofapproval.day
        );
        assert.equal(
          resp.data.enddateofapproval.month,
          mockup.enddateofapproval.month
        );
        assert.equal(
          resp.data.enddateofapproval.year,
          mockup.enddateofapproval.year
        );

        assert.equal(
          resp.data.approvaldate.day,
          mockup.approvaldate.day
        );
        assert.equal(
          resp.data.approvaldate.month,
          mockup.approvaldate.month
        );
        assert.equal(
          resp.data.approvaldate.year,
          mockup.approvaldate.year
        );

        assert.equal(resp.data.cause, mockup.cause);

        done();
      });
  });

  it("should be student put use token", function(done) {
    request(app)
      .post("/api/students")
      .set("Authorization", "Bearer " + token)
      .send(mockup)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var resp = res.body;
        var update = {
            room: "2",
            studentnumber: "2",
            studentid: "2",
           prefix: "2",
        firstname: "2",
        lastname: "2",
        identificationnumber: "2",
        attendancedate: {
          day: "2",
          month: "2",
          year: "2"
        },
        oldschool: "2",
        province: "2",
        lastfloor: "2",
        birthday: {
          day: "2",
          month: "2",
          year: "2"
        },
        sex: "2",
        nationality: "2",
        religion: "2",
        fatherfullname: "2",
        motherfullname: "2",
        pp1set: "2",
        pp1number: "2",
        pp2number: "2",
        enddateofapproval: {
          day: "2",
          month: "2",
          year: "2"
        },
        approvaldate: {
          day: "2",
          month: "2",
          year: "2"
        },
        cause: "2"

            
        };
        request(app)
          .put("/api/students/" + resp.data._id)
          .set("Authorization", "Bearer " + token)
          .send(update)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }
            var resp = res.body;
            assert.equal(resp.data.room, update.room);
            assert.equal(resp.data.studentnumber,update.studentnumber);
            assert.equal(resp.data.studentid, update.studentid);
            assert.equal(resp.data.prefix, update.prefix);
            assert.equal(resp.data.firstname, update.firstname);
            assert.equal(resp.data.lastname, update.lastname);
            assert.equal(
              resp.data.identificationnumber,
              update.identificationnumber
            );

            assert.equal(
              resp.data.attendancedate.day,
              update.attendancedate.day
            );
            assert.equal(
              resp.data.attendancedate.month,
              update.attendancedate.month
            );
            assert.equal(
              resp.data.attendancedate.year,
              update.attendancedate.year
            );

            assert.equal(resp.data.oldschool, update.oldschool);
            assert.equal(resp.data.province, update.province);
            assert.equal(resp.data.lastfloor, update.lastfloor);

            assert.equal(
              resp.data.birthday.day,
              update.birthday.day
            );
            assert.equal(
              resp.data.birthday.month,
              update.birthday.month
            );
            assert.equal(
              resp.data.birthday.year,
              update.birthday.year
            );

            assert.equal(resp.data.sex, update.sex);
            assert.equal(
              resp.data.nationality,
              update.nationality
            );
            assert.equal(resp.data.religion, update.religion);
            assert.equal(resp.data.fatherfullname, update.fatherfullname);
            assert.equal(resp.data.motherfullname, update.motherfullname);
            assert.equal(resp.data.pp1set, update.pp1set);
            assert.equal(resp.data.pp1number, update.pp1number);
            assert.equal(resp.data.pp2number, update.pp2number);

            assert.equal(
              resp.data.enddateofapproval.day,
              update.enddateofapproval.day
            );
            assert.equal(
              resp.data.enddateofapproval.month,
              update.enddateofapproval.month
            );
            assert.equal(
              resp.data.enddateofapproval.year,
              update.enddateofapproval.year
            );

            assert.equal(
              resp.data.approvaldate.day,
              update.approvaldate.day
            );
            assert.equal(
              resp.data.approvaldate.month,
              update.approvaldate.month
            );
            assert.equal(
              resp.data.approvaldate.year,
              update.approvaldate.year
            );

            assert.equal(resp.data.cause, update.cause);

            done();
          });
      });
  });

  it("should be student delete use token", function(done) {
    request(app)
      .post("/api/students")
      .set("Authorization", "Bearer " + token)
      .send(mockup)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var resp = res.body;
        request(app)
          .delete("/api/students/" + resp.data._id)
          .set("Authorization", "Bearer " + token)
          .expect(200)
          .end(done);
      });
  });

  it("should be student get not use token", done => {
    request(app)
      .get("/api/students")
      .expect(403)
      .expect({
        status: 403,
        message: "User is not authorized"
      })
      .end(done);
  });

  it("should be student post not use token", function(done) {
    request(app)
      .post("/api/students")
      .send(mockup)
      .expect(403)
      .expect({
        status: 403,
        message: "User is not authorized"
      })
      .end(done);
  });

  it("should be student put not use token", function(done) {
    request(app)
      .post("/api/students")
      .set("Authorization", "Bearer " + token)
      .send(mockup)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var resp = res.body;
        var update = {
          name: "name update"
        };
        request(app)
          .put("/api/students/" + resp.data._id)
          .send(update)
          .expect(403)
          .expect({
            status: 403,
            message: "User is not authorized"
          })
          .end(done);
      });
  });

  it("should be student delete not use token", function(done) {
    request(app)
      .post("/api/students")
      .set("Authorization", "Bearer " + token)
      .send(mockup)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var resp = res.body;
        request(app)
          .delete("/api/students/" + resp.data._id)
          .expect(403)
          .expect({
            status: 403,
            message: "User is not authorized"
          })
          .end(done);
      });
  });

  afterEach(function(done) {
    Student.remove().exec(done);
  });
});
