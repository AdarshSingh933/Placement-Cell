//model to store student college and status
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;