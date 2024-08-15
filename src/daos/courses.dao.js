import Course from "../models/Course.js";

const courseDAO = {};

// Obtener todos los cursos
courseDAO.getAll = async () => {
    try {
        return await Course.find();
    } catch (error) {
        throw new Error(error.message || "Error al obtener cursos");
    }
};
 
// Insertar un curso
courseDAO.insertOne = async (course) => {
    
        const result = await Course.create(course);
        console.log(result)
        return result;
};

// Obtener un curso por ID
courseDAO.getOne = async (id) => {
    try {
        return await Course.findOne({ course_id: id });
    } catch (error) {
        throw new Error(error.message || "Error al obtener el curso");
    }
};



export default courseDAO;
