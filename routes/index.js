const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');

router.get('/',homeController.home);
router.use('/employee',require('./employee'));
router.use('/student',require('./student'));
router.use('/interview',require('./interview'));

module.exports = router;