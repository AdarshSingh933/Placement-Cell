const Interview = require('../models/interview.model');
const Student = require('../models/student.model');

module.exports.interview =async function(req,res){
    try{
        const interviews = await Interview.find({});
        return res.render('interview',{
            interviews:interviews
        });
    }catch(err){
       console.log(err);
       return res.redirect('back');
    }
}

module.exports.create = async function(req, res) {
    try {
         let student = await Student.findOne({email:req.body.studentEmail });
         
         if(!student){
            student =await Student.create({email:req.body.studentEmail});
         }
        const interviewDocument = await Interview.findOne({ companyName: req.body.companyName });

        if (interviewDocument) {
            // Check if the email already exists in the array
            interviewDocument.student.push(student);
            interviewDocument.save();
        } else {
            await Interview.create({
                companyName:req.body.companyName,
                date:req.body.date,
                student:[student]
            });
        }

        const interviews = await Interview.find({});
        return res.render('interview', {
            interviews: interviews
        });
    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
}



module.exports.interviewStudentList = async function(req,res){
    try{
       const interview =await Interview.findOne({companyName:req.params.companyName}).populate('date').populate('student');

       if (!interview) {
        return res.redirect('back'); // Handle the case where interview is not found
       }
        // Format the date to '2 Sept 2023'
        const formattedDate = new Date(interview.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

       return res.render('interviewStudentList',{
        studentList:interview.student,
        date:formattedDate
       })
    }catch(err){
        console.log(err);
        return res.redirect('back');
    }
}