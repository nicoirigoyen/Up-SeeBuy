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
        return res.status(200).json(
            await Products.findAll({
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            })
          );
        // if(data.length !== 0 ){
        //     return res.status(200).json(data);
        // }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }

});


// [ ] __POST /user/register:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de usuario por body
//   - Crea un nuevo usuario
server.post("/create", async (req, res)=>{
    var { name, image, price, category, description, state } = req.body;
    try { 
         await Products.create({
            name,
            image,
            price,
            category,
            description,
            state
        })
       
        res.status(200).send('Succesful!')
        
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});





module.exports = server;