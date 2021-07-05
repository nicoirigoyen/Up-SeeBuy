const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {

  sequelize.define('users',{

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
    }
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    password: DataTypes.STRING
}, {
freezeTableName: true,
instanceMethods: {
generateHash(password) {
return bcrypt.hash(password, bcrypt.genSaltSync(8));
},
validPassword(password) {
return bcrypt.compare(password, this.password);
}},
  });

};