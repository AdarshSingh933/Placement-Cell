const mongoose = require('mongoose');

const courseScoreSchema = new mongoose.Schema({
    DSA:{
        type:Number,
        required:true
    },
    WebD:{
        type:Number,
        required:true
    },
    React:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

const CourseScore =  mongoose.model('CourseScore',courseScoreSchema);

module.exports = CourseScore;