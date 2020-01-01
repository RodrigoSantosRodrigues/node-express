const express = require('express');
const routes  = express.Router();

routes.get('/', function(req, res){
  res.json({
    message : 'My first route in express'
  });
});

routes.get('/a?r', function(req, res){
  res.send('Parametro opcional: r é obrigatório, a opcional')
});

routes.get('/a+r', function(req, res){
  res.send('Parametro opcional: r é obrigatório, a obrigatório')
});

routes.get('/a*r', function(req, res){
  res.send('Parametro opcional: r é obrigatório, a obrigatório, pode ter qualquer coisa entre os dois')
});

routes.get('/params/:name', function(req, res) {
  res.json({
      params: req.params,
      host  : req.host,
      headers: req.headers,
      port   : req.port
  });
});

//Convert campos form-data para json usando body-Parser instanciado no app.js
routes.post('/body', function(req, res) {
  res.json(req.body)
});

module.exports = routes;
