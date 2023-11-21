const express = require('express');
const app = express();
const port = 3000;

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json());

app.use((req, res, next) => {
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    if (!validMethods.includes(req.method)) {
        return res.status(404).send('Not found');
    }
    next();
});

app.use('/', listViewRouter);
app.use('/', listEditRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

