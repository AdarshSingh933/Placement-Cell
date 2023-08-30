const Student = require('../models/student.model');

module.exports.home =async function(req,res){
    try{
        const students =await Student.find({});
        return res.render('home',{
            students:students
        });
    }catch(err){
        console.log("error",err);
        return res.redirect('back');
    }
   
}