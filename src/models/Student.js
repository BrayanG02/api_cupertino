import { Model, Schema, model } from "mongoose";
const studentSchema=new Schema({
    student_id:{
        type:Number,
        required:true,
        unique:true
    },
    name:String,
    lastname:String,
    grade:Number,
    group:String,
    career:String,
    average:Number
},{
    versionKey:false,
    timestamps:true 
});

export default model('student', studentSchema)