const express = require('express');

const autorRouter = require('./autor.router');
//const editorialRouter = require('./category.router');
//const ejemplarRouter = require('./category.router');
//const libroRouter = require('./product.router');
//const prestamoRouter = require('./orders.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/autores', autorRouter);
 /*  router.use('/editoriales', editorialRouter);
  router.use('/ejemplares', ejemplarRouter);
  router.use('/libros', libroRouter);
  router.use('/prestamos', prestamoRouter); */
  router.use('/usuarios', usersRouter);
}

module.exports = routerApi;
