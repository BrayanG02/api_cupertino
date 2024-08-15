import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    course_id: {
        type: Number,
        required: [true, "El ID del curso es obligatorio"],
        unique: true
    },
    title:String,
    description:String,
    duration:Number,
    level:String
}, {
    versionKey: false,
    timestamps: true
});

export default model('Course', courseSchema);
