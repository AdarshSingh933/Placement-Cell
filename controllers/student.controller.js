const Student = require('../models/student.model');

module.exports.create =async function(req,res){
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