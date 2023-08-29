const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
    interviewResult:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Result =  mongoose.model('Result',resultSchema);

module.exports = Result;