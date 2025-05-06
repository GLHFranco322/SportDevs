const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const usersFilePath = path.join(__dirname, "../data/users.json");
const { v4: uuidv4, validate } = require("uuid");
const { saveJson, readJson } = require("../db/index");
const { error } = require("console");

const db = require("../database/models");

module.exports = {
  register: (req, res) => {
    return res.render("register", { title: "register", errors: [] }); // Pasa un array vacío por defecto
  },
  processRegister: async (req, res) => {
    try {
      const {
        name,
        surname,
        email,
        password,
        username,
        subscribed,
        address,
        city,
        country,
        "re-password": rePassword,
      } = req.body;
      
      // Validaciones
      const errors = [];

      if (
        !name ||
        !surname ||
        !email ||
        !password ||
        !username ||
        !address ||
        !city ||
        !country
      ) {
        errors.push("Todos los campos son obligatorios.");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push("El correo electrónico no es válido.");
      }

      if (password !== rePassword) {
        errors.push("Las contraseñas no coinciden.");
      }

      if (password.length < 6) {
        errors.push("La contraseña debe tener al menos 6 caracteres.");
      }

      const emailExists = await db.Users.findOne({where : {email : email.trim()}});
      if (emailExists) {
        errors.push("El correo electrónico ya está registrado.");
      }

      const usernameExists = await db.Users.findOne({where : {userName : username.trim()}});
      if (usernameExists) {
        errors.push("El nombre de usuario ya está registrado.");
      }

      if (errors.length > 0) {
        return res.render("register", { title: "register", errors }); // Pasa los errores a la vista
      }

      await db.Users.create({
        email: email.trim(),
        name: name.trim(),
        surname: surname.trim(),
        password: bcrypt.hashSync(password, 10),
        userName: username.trim(),
        rolId: 2,
        subscribed: subscribed ? true : false,
        address: address.trim(),
        city: city.trim(),
        country: country.trim(),
      });

      return res.redirect("/auth");

    } catch (error) {
      console.log(error);
    }
  },
  profile: (req, res) => {
    return res.render("user-views/profile", { title: "profile" });
  },
  update: (req, res) => {},
};
