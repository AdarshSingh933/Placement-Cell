const express = require('express');
const router = express.Router();

const interviewController = require('../controllers/interview.controller');

router.get('/',interviewController.interview);
router.post('/create',interviewController.create);
router.get('/student-list/:companyName',interviewController.interviewStudentList);

module.exports = router;