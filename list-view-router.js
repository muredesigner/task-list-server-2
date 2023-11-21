const express = require('express');
const router = express.Router();

let tasks = [
  {
    "id": "123456",
    "isCompleted": false,
    "description": "Walk the dog",
  },
];

// Middleware para validar los parámetros de las rutas
router.use('/:param', (req, res, next) => {
  const validParams = ['completed', 'incomplete'];
  
  if (!validParams.includes(req.params.param)) {
    return res.status(400).send('Parámetro no válido');
  }

  next();
});

// Ruta para listar las tareas completas
router.get('/completed', (req, res) => {
  let completedTasks = tasks.filter(task => task.isCompleted);
  res.json(completedTasks);
});

// Ruta para listar las tareas incompletas
router.get('/incomplete', (req, res) => {
  let incompleteTasks = tasks.filter(task => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = router;
