const express = require('express');
const router = express.Router();

let tasks = [
  {
    "id": "123456",
    "isCompleted": false,
    "description": "Walk the dog",
  },
];

// Middleware para validar el cuerpo de las solicitudes POST y PUT
router.use(['/create', '/update/:id'], (req, res, next) => {
  const { id, isCompleted, description } = req.body;
  
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send('El cuerpo de la solicitud está vacío');
  }

  if (!id || isCompleted === undefined || !description) {
    return res.status(400).send('Información no válida o atributos faltantes para crear las tareas');
  }

  next();
});

// Ruta para crear una tarea
router.post('/create', (req, res) => {
  const { id, isCompleted, description } = req.body;
  const newTask = { id, isCompleted, description };
  tasks.push(newTask);
  res.json(newTask);
});

// Ruta para eliminar una tarea
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: `Task with id ${id} has been deleted.` });
});

// Ruta para actualizar una tarea
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { isCompleted, description } = req.body;
  tasks = tasks.map(task => task.id === id ? { id, isCompleted, description } : task);
  res.json(tasks.find(task => task.id === id));
});

module.exports = router;