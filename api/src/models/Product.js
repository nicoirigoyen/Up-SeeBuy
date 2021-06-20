const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: { 
      type:DataTypes.STRING(3),
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },


  });

 
};