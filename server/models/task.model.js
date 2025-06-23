const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: [true, "title  is required"] },
    description: String,
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);