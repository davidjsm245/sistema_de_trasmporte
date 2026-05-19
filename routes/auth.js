const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/auth");

//Funcion de autenticacion
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  ///Buscar el usuario en la base de datos 'BDD'
  db.query(
    "select * from  empresa where email = ?",
    [email],
    async (err, results) => {
      if (err) throw err;
      if (results.length === 0) {
        return res
          .status(401)
          .json({ message: "Usuario o contraseña incorrectos" });
      }
      const user = results[0];

      ////Comparar la contraseña encriptada
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Usuario o contraseña incorrectos" });
      }

      // Si la contraseña es valida , genera un token y lo envia
      const token = generateToken({ id: user.id_empresa, email: user.email });
      res.json({
        message: "logueo exitoso",
        idusuarioEmpresa: user.id_empresa,
        token,
      });
    },
  );
});

module.exports = router;
