const { Router } = require('express');
const { getTodos, createTodo, updateTodo, deleteTodos } = require('./todoControllers');

const todoRouter = Router();

todoRouter.get('/todos', getTodos);
todoRouter.post('/todos', createTodo);
todoRouter.put('/todos', updateTodo);
todoRouter.delete('/todos', deleteTodos);

module.exports = todoRouter;