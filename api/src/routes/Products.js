require("dotenv").config();
var express = require("express");
const server = express.Router();
const axios = require("axios");
const { Products } = require("../db.js");
const { request } = require("express");
const { Op } = require("sequelize");


server.get("/products", async( req,res)=>{
    const  data  = await Products.findAll();
    
    try {

        if(data.length !== 0 ){
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }

})


// [ ] __POST /user/register:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de usuario por body
//   - Crea un nuevo usuario
// server.post("/prodcuts", async (req, res)=>{
//     var { name, image, category, description, Singin } = req.body;
    
//     let actividad = await Activities.create({
//         name,
//         image,
//         category,
//         description
//     })
//     Singin.forEach(async (pais) => {
//         let singin = await Singin.findOne({
//             where: { id: pais }
//         })
//         await actividad.addCountry(country)
        
//     })
//     res.status(201).send('Succesful!')
// });





module.exports = server;