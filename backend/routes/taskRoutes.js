const express = require('express');
const router = express.Router();

let tasks = [];
let idCounter = 1;

// Get all tasks
router.get('/', (req, res) => res.json(tasks));

// Add a new task
router.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const newTask = { id: idCounter++, title, description: description || '', status: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) return res.status(404).json({ error: 'Task not found' });

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;

    res.json(task);
});

// Delete a task
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(t => t.id !== parseInt(id));
    res.status(204).send();
});

module.exports = router;

