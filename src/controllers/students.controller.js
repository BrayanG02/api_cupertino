import studentDAO from "../daos/students.dao.js";
export const getAll=(req, res)=>{
    studentDAO.getAll()
    .then(students=>{
        res.json(students);

    })
    .catch(err=>{
        res.json({message:err});
    });

};

export const insertOne=(req,res)=>{
    studentDAO.insertOne(req.body)
    .then(student=>{
        res.json(student);
    })
    .catch(err=>{
        res.json({message:err});
    });
};

export const getOne=(req,res)=>{
    studentDAO.getOne(req.params.id)
    .then(student=>{
        if(student!=null)
            res.json(student);
        else
            res.json({message:"Student not found"});
        res.json(student);
    })
    .catch(err=>{
        res.json({message:err});
    });
};


// Actualizar un estudiante
export const updateOne = (req, res) => {
    studentDAO.updateOne(req.params.id, req.body)
        .then(student => {
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(404).json({ message: "Estudiante no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message || "Error al actualizar estudiante" });
        });
};

// Eliminar un estudiante
export const deleteOne = (req, res) => {
    studentDAO.deleteOne(req.params.id)
        .then(result => {
            if (result) {
                res.status(200).json({ message: "Estudiante eliminado exitosamente" });
            } else {
                res.status(404).json({ message: "Estudiante no encontrado" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message || "Error al eliminar estudiante" });
        });
};
