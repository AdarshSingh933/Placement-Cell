const Student = require('../models/student.model');

module.exports.signUp = function(req,res){
    return res.render('signUp');
}

module.exports.signIn = function(req,res){
    return res.render('signIn');
}

module.exports.studentCreate =async function(req,res){
    try{
        await Student.create(req.body);
        const students =await Student.find({});
        return res.render('home',{
         students:students
        });
    }catch(err){
       console.log(err);
       return res.redirect('back');
    }
}