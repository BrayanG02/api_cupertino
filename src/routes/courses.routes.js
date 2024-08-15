import { Router } from "express";
import { getAllCourses, getOneCourse, insertOneCourse} from "../controllers/courses.controller.js";

const router = Router();

// Ruta para obtener todos los cursos
router.get('/getAllCourses', getAllCourses);

// Ruta para insertar un nuevo curso
router.post('/insertOneCourse', insertOneCourse);

// Ruta para obtener un curso por ID
router.get('/getOneCourse/:id', getOneCourse);


export default router;
