const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "title  is required"] },
    description: {
        type: String,
        maxlength: [50, "La descripción no puede tener más de 50 caracteres"]
    },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);