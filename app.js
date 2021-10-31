const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 3000;

//Conexión a base de Datos
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.mzxff.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log(e));

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//rutas web desde el router
app.use("/", require("./routers/rutasWeb"));
app.use("/mascotas", require("./routers/Mascotas"));

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "recurso no encontrado",
  });
});
/* app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
}); */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
