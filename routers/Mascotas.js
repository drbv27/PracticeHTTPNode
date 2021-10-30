const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("mascotas", {
    arrayMascotas: [
      { id: "jhfhj", nombre: "rex", description: "rex description" },
      { id: "jhrxj", nombre: "max", description: "max description" },
    ],
  });
});

module.exports = router;
