import express from 'express';
import morgan from 'morgan';
import router from './routes/students.routes.js';
import courseRoutes from "./routes/courses.routes.js";

const app=express();
// Settings
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router);

// Usar las rutas de cursos
app.use(courseRoutes);


export default app;