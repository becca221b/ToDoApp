const Task = require('../models/task.model');

module.exports.findAllTasks = (req, res) =>{
    Task.find()
        .then(allTasks => res.json({tasks : allTasks}))
        .catch(err => res.status(500).json({message: "Error al buscar las tareas", error: err.message}))
}

module.exports.createTask = (req, res) =>{
    Task.create(req.body)
    .then(newlyCreatedTask => res.status(201).json({ task: newlyCreatedTask}))
    .catch(err => res.json({ message: "Error al crear una tarea", error: err}))
}


module.exports.deleteAnExistingTask = (req, res)=>{
    Task.deleteOne({_id: req.params.id})
    .then(result=> res.json({ message: "Tarea eliminada correctamente", result: result}))
    .catch(err=> res.json({message: "Error al borrar una tarea", error: err}))
}

module.exports.updateExistingTask = (req, res) => {
    const {completed} = req.body;
    if(typeof completed !== "boolean"){
        return res.status(400).json({message: "Estado de completado inválido, debe ser un booleano"})
    }
    Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedTask => res.status(200).json({ message: "Tarea actualizada correctamente",task: updatedTask }))
      .catch(err => res.json({ message: "Error al actualizar una tarea", error: err }));
};
