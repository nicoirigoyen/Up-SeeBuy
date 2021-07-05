require("dotenv").config();
var express = require("express");
const server = express.Router();
const axios = require("axios");
const { Products, Users } = require("../db.js");
const { request } = require("express");
const { Op } = require("sequelize");

server.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {

        const product = await Products.findByPk(id, {
            include: Users,
            attributes: {
                exclude: ["createdAt", "updatedAt","userId"],
              },
          }) 
    
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
      
  });

server.get("/", async( req,res)=>{
    const {page} = req.query;
    const pag = page * 5
    const obj = pag? {offset: obj, limit: 30} : {limit: 30}
    var { name } = req.query;
  if (name ) {
    try {
      return res.status(200).json(
        await Products.findAll({
          where: { name: { [Op.iLike]: `%${name}%` } },
          attributes: {
            exclude: ["createdAt", "updatedAt","userId"],
          },
        })
      );
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } 
    try {
        return res.status(200).json(
            await Products.findAll({
              attributes: {
                exclude: ["createdAt", "updatedAt","userId"],
              },
            })
          );
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }

});


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