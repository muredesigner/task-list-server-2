const express = require('express');
const router = express.Router();

let tasks = [
    {
        "id":"123456",
        "isCompleted":false,
        "description":"Walk the dog",
    }
];

router.param('id', (req, res, next, id) => {
    if (!tasks.find(task => task.id === id)) {
        return res.status(400).send('Bad Request: Invalid ID');
    }
    next();
});

router.get('/tasks/completed', (req, res) => {
    let completedTasks = tasks.filter(task => task.isCompleted === true);
    res.json(completedTasks);
});

router.get('/tasks/incomplete', (req, res) => {
    let incompleteTasks = tasks.filter(task => task.isCompleted === false);
    res.json(incompleteTasks);
});

module.exports = router;
