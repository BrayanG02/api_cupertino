import courseDAO from "../daos/courses.dao.js";

export const getAllCourses = (req, res) => {
    courseDAO.getAll()
        .then(courses => res.status(200).json(courses))
        .catch(err => res.status(500).json({ message: err.message }));
};

export const getOneCourse = (req, res) => {
    courseDAO.getOne(req.params.id)
        .then(course => {
            if (course) {
                res.status(200).json(course);
            } else {
                res.status(404).json({ message: "Curso no encontrado" });
            }
        })
        .catch(err => res.status(500).json({ message: err.message }));
};

export const insertOneCourse = (req, res) => {
    courseDAO.insertOne(req.body)
        .then(course => res.status(201).json(course))
        .catch(err => res.status(400).json({ message: err.message }));
};


