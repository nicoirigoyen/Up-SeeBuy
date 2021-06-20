require("dotenv").config();
var express = require("express");
const server = express.Router();
const axios = require("axios");
const { Users } = require("../db.js");
const { request } = require("express");

// [ ] __POST /user/register:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de usuario por body
//   - Crea un nuevo usuario
server.post("/", async (req, res)=>{
    var { name, image, category, description, Singin } = req.body;
    
    let actividad = await Activities.create({
        name,
        image,
        category,
        description
    })
    Singin.forEach(async (pais) => {
        let singin = await Singin.findOne({
            where: { id: pais }
        })
        await actividad.addCountry(country)
        
    })
    res.status(201).send('Succesful!')
});



module.exports = server;