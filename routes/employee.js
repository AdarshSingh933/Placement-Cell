const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

router.get('/signUp',employeeController.signUp);
router.get('/signIn',employeeController.signIn);
router.post('/student-create',employeeController.studentCreate);

module.exports = router;