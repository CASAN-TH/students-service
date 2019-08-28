"use strict";
// use model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  room: {
    type: Number,
    required: "Please fill a Student room"
  },
  studentnumber: {
    type: Number,
    required: "Please fill a Student studentnumber"
  },
  studentid: {
    type: String,
    required: "Please fill a Student studentid"
  },
  prefix: {
    type: String,
    required: "Please fill a Student prefix"
  },
  firstname: {
    type: String,
    required: "Please fill a Student firstname"
  },
  lastname: {
    type: String,
    required: "Please fill a Student lastname"
  },
  identificationnumber: {
    type: Number,
    required: "Please fill a Student identificationnumber"
  },
  attendancedate: {
    type: String,
    required: "Please fill a Student attendancedate"
  },
  oldschool: {
    type: String,
    required: "Please fill a Student oldschool"
  },
  province: {
    type: String,
    required: "Please fill a Student province"
  },
  lastfloor: {
    type: String,
    required: "Please fill a Student lastfloor"
  },
  birthday: {
    type: String,
    required: "Please fill a Student birthday"
  },
  sex: {
    type: String,
    required: "Please fill a Student sex"
  },
  nationality: {
    type: String,
    required: "Please fill a Student nationality"
  },
  religion: {
    type: String,
    required: "Please fill a Student religion"
  },
  fatherfullname: {
    type: String,
    required: "Please fill a Student fatherfullname"
  },
  motherfullname: {
    type: String,
    required: "Please fill a Student motherfullname"
  },
  phonenumber: {
    type: Number,
    required: "Please fill a Student phonenumber"
  },
  pp1set: {
    type: String,
    required: "Please fill a Student pp1set"
  },
  pp1number: {
    type: String,
    required: "Please fill a Student pp1number"
  },
  pp2number: {
    type: String,
    required: "Please fill a Student pp2number"
  },
  enddateofapproval: {
    type: String,
    required: "Please fill a Student enddateofapproval"
  },
  approvaldate: {
    type: String,
    required: "Please fill a Student approvaldate"
  },
  cause: {
    type: String,
    required: "Please fill a Student cause"
  },

  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  },
  createby: {
    _id: {
      type: String
    },
    username: {
      type: String
    },
    displayname: {
      type: String
    }
  },
  updateby: {
    _id: {
      type: String
    },
    username: {
      type: String
    },
    displayname: {
      type: String
    }
  }
});

mongoose.model("Student", StudentSchema);
