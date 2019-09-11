"use strict";
// use model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  school: {
    type: String,
    required: "Please fill a Student school"
  },
  class: {
    type: String,
    required: "Please fill a Student class"
  },
  room: {
    type: Number
  },
  studentnumber: {
    type: Number
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
    type: String
  },
  oldschool: {
    type: String
  },
  province: {
    type: String
  },
  lastfloor: {
    type: String
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
    type: String
  },
  religion: {
    type: String
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
    type: String,
    required: "Please fill a Student phonenumber"
  },
  pp1set: {
    type: String
  },
  pp1number: {
    type: String
  },
  pp2number: {
    type: String
  },
  enddateofapproval: {
    type: String
  },
  approvaldate: {
    type: String
  },
  cause: {
    type: String
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
