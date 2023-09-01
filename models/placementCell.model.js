//model to store all information related to student
const mongoose = require('mongoose');

const PlacementCellSchema = new mongoose.Schema({
    batch:{
        type:String,
        required:true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
    courseScore:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CourseScore'
    },
   
    result:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Result'
    }
},
{
    timestamps:true
});

const PlacementCell =  mongoose.model('PlacementCell',PlacementCellSchema);

module.exports = PlacementCell;