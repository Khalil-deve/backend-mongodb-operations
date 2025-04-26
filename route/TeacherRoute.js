const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/TeacherController.js');

//Task Number = 21
router.get('', TeacherController.InsertFiveList);

//Task Number = 22 perform CRUD operation
//First Create operation
router.get('/create', TeacherController.createTeacher);

//Second Read operation
router.get('/read', TeacherController.getAllTeachers);

//Third Update operation
router.get('/update/:id', TeacherController.updateTeacher);

//Fourth Delete operation
router.get('/delete/:id', TeacherController.deleteTeacher);

module.exports = router;