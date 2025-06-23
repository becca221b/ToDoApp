const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/task.controller");


    router.get("/tasks", TaskController.findAllTasks);
    router.put("/tasks/:id", TaskController.updateExistingTask);
    router.post("/tasks", TaskController.createTask);
    router.delete("/tasks/:id", TaskController.deleteAnExistingTask);

module.exports = router;