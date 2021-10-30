const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
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
