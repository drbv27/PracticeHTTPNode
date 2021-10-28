const express = require("express");
const app = express();
const port = 3000;
//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "Mi titulo dinamico" });
});
/* app.get("/", (req, res) => {
  res.send("Hello World!");
}); */

app.get("/servicios", (req, res) => {
  res.render("servicios", { tituloServicios: "Un titulo mas" });
});
/* app.get("/servicios", (req, res) => {
  res.send("en servicios");
}); */

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
