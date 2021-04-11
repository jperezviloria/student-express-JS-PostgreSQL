"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveStudentController = exports.getAllStudentsController = void 0;

var _StudentDatabase = require("../database/StudentDatabase");

const getAllStudentsController = async (req, res) => {
  const allStudents = await (0, _StudentDatabase.getAllStudents)();

  try {
    if (allStudents != "") {
      return res.json({
        status: 200,
        message: `The students was found`,
        data: allStudents
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    });
  }
};

exports.getAllStudentsController = getAllStudentsController;

const saveStudentController = async (req, res) => {
  const {
    nameStudent,
    ageStudent
  } = req.body;

  try {
    const newStudent = await (0, _StudentDatabase.saveStudent)(nameStudent, ageStudent);
    console.log(newStudent);

    if (newStudent == "The student was created") {
      return res.json({
        status: 201,
        message: newStudent
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    });
  }
};

exports.saveStudentController = saveStudentController;