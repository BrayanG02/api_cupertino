import Student from "../models/Student.js";

const studentDAO={};

studentDAO.getAll=async()=>{
    return await Student.find();
};

studentDAO.insertOne=async(student)=>{

    const result=await Student.create(student);
    console.log(result)
    return result;
}



studentDAO.getOne = async (id) => {
    return await Student.findOne({ student_id: id });
};

// Actualizar un estudiante
studentDAO.updateOne = async (id, studentData) => {
    try {
        const result = await Student.findOneAndUpdate(
            { student_id: id },
            { $set: studentData },
            { new: true, runValidators: true }
        );
        return result;
    } catch (error) {
        throw new Error(error.message || "Error al actualizar estudiante");
    }
};

// Eliminar un estudiante
studentDAO.deleteOne = async (id) => {
    try {
        const result = await Student.findOneAndDelete({ student_id: id });
        return result;
    } catch (error) {
        throw new Error(error.message || "Error al eliminar estudiante");
    }
};
export default studentDAO; 