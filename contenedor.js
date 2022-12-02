const fs = require(`fs`);

class Contenedor {
  constructor(nombre) {
    this.nombre = nombre;
  }

  async save(listaProductos) {
    let productos = listaProductos.map((item, index) => {
      return {
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        id: index + 1,
      };
    });
    fs.writeFile(
      this.nombre,
      JSON.stringify(productos, null, 2),
      "utf8",
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("productos", data);
        }
      }
    );
  }

  getById(id) {
    fs.readFile(this.nombre, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let productos = JSON.parse(data);
        let producto = productos.find((item) => item.id === id);
        console.log("producto", producto);
      }
    });
  }

  getAll() {
    fs.readFile(this.nombre, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let productos = JSON.parse(data);
        console.log("productos", productos);
      }
    });
  }

  deleteById(id) {
    fs.readFile(this.nombre, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let productos = JSON.parse(data);
        let producto = productos.filter((item) => item.id !== id);
        fs.writeFile(
          this.nombre,
          JSON.stringify(producto, null, 2),
          "utf8",
          function (err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log("productos", data);
            }
          }
        );
      }
    });
  }

  deleteAll() {
    fs.writeFile(
      this.nombre,
      JSON.stringify([], null, 2),
      "utf8",
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("productos", data);
        }
      }
    );
  }
}

const productos = new Contenedor(`productos.txt`);

productos.save([
  {
    title: `AirMAX 270`,
    price: 290,
    thumbnail: `https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/calzado-air-max-270-KkLcGR.png`,
  },
  {
    title: `AirMAX 90`,
    price: 199,
    thumbnail: `https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-90-g-golf-shoe-hxtVmz.png`,
  },
  {
    title: `AirMAX 97`,
    price: 299,
    thumbnail: `https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-97-g-golf-shoe-hxtVmz.png`,
  },
]);

productos.getById(1);
productos.getById(2);
productos.getAll();
// productos.deleteById(1);
// productos.deleteAll();

module.exports = Contenedor;
