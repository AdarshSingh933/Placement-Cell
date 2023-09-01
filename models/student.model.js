//model to store student college and status
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
      
    },
    college:{
        type:String,
        
    },
    status:{
        type:String,
        
    }
},{
    timestamps:true
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;