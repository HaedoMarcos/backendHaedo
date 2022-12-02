const express = require(`express`);
const { Contenedor, productos } = require("./contenedor");

const app = express();
app.get(`/`, (req, res) => {
  res.send(`El servidor funciona
    `);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

app.get(`/productos`, (req, res) => {
  res.send(`Los productos son ${Contenedor.productos}`);
});
app.get(`/productoRandom`, (req, res) => {
  res.send();
});
