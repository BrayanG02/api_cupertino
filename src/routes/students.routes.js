import {Router} from "express";
import { getAll, getOne, insertOne, updateOne, deleteOne  } from "../controllers/students.controller.js";
const router=Router();
router.get('/getAll', getAll);
router.post('/insertOne',insertOne);
router.get('/getOne/:id',getOne);
// Ruta para actualizar un estudiante
router.put('/updateOne/:id', updateOne);
// Ruta para eliminar un estudiante
router.delete('/deleteOne/:id', deleteOne);

export default router;

