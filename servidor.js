const express = require(`express`);
const Contenedor = require("./contenedor");
const productos = new Contenedor(`./productos.txt`);

const app = express();
app.get(`/`, (req, res) => {
  res.send(`El servidor funciona
    `);
});

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
});

app.get(`/productos`, (req, res) => {
  res.send(`Los productos son ${productos}`);
});
app.get(`/productoRandom`, (req, res) => {
  res.send(`El servidor funciona`);
});
