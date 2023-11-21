const express = require('express');
const app = express();
const port = 3000;

let tasks = [
    {
        "id":"123456",
        "isCompleted":false,
        "description":"Walk the dog",
    }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
