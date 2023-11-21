const express = require('express');
const app = express();
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');


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

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
