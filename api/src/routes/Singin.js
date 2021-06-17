require("dotenv").config();
var express = require("express");
const server = express.Router();
const axios = require("axios");
const { Users } = require("../db.js");
const { request } = require("express");

// [ ] __POST /user/register:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de usuario por body
//   - Crea un nuevo usuario
server.post("/register", async (req, res) => {
  let { email, name, lastname, password } = req.body;
  if (email && password && name && lastname) {
    // let exist = Users.findOne({
    //   where: {
    //     email: email,
    //   },
    // });
    try {
      let exist = Users.findOne({
        where: {
          email: email,
        },
      })
      if (exist) {
        return res.status(200).json(
          await Users.create({
            email,
            password,
            name,
            lastname
          })
        );
      } else {
        res.status(400).send("El usuario ingresado ya se ecnuetra registrado!");
      }
    } catch (error) {
      res.status(400).json({ msg: error.message  });
    }
  }
});
// server.post("/singin", async (req, res) => {
//   let { email, password } = req.body;
//   if(email && password){
//     const existe = await Users.findOne({
//       where: {
//         email: email,
//         password: password
//       },
      
//     });
    
//     if(existe){
//       res.status(200).send('Bienvenido!')
//     }
//     else{res.send('Email o contraseña incorrecta')}
    
//   }
//   else{res.status(400).json('Ingrese un usuario!')}

// });

server.post("/singin", async (req, res) => {
  console.log(req.body)
  let { email, password } = req.body;
  if(email && password){
    const existe = await Users.findOne({
      where: {
        email: email,
        password: password
      },
      
    });
    
    if(existe){
      res.status(200).send('Bienvenido!')
    }
    else{res.send('Email o contraseña incorrecta')}
    
  }
  else{res.status(400).json('Ingrese un usuario!')}
});


module.exports = server;
