const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.get('/movies', (req, res) => {
  res.send('GET: obtener listado de películas');
});
app.get('/movies/:id', (req, res) => {
  res.send('GET: obtener película con identificador ' + req.params.id);
});
app.post('/movies', (req, res) => {
  res.send('POST: crear película');
});
app.put('/movies/:id', (req, res) => {
  res.send('PUT: actualizar película con identificador ' + req.params.id);
});
app.patch('/movies/:id', (req, res) => {
  res.send('PATCH: actualizar película parcialmente con identificador ' + req.params.id);
});
app.delete('/movies/:id', (req, res) => {
  res.send('DELETE: eliminar película con identificador ' + req.params.id);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`)
});