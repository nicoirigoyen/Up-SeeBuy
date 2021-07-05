const { DataTypes, UUID } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {

  sequelize.define('products', {
    id: { 
      type: DataTypes.INTEGER(),
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
    price:{
      type: DataTypes.INTEGER,
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
    state: {
      type: DataTypes.ENUM('Expired','Active')
    },
    // userId: {
    //   type: DataTypes.STRING,
    // }


  });

 
};