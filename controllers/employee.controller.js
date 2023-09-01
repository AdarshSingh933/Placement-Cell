const Student = require('../models/student.model');
const Interview = require('../models/interview.model');

module.exports.signUp = function(req,res){
    return res.render('signUp');
}

module.exports.signIn = function(req,res){
    return res.render('signIn');
}

