const Express = require('express');
const app = Express();
const server = require('./src/app.js');
const {conn} = require('./src/db.js');
const {PORT} = require('./src/utils/config/config')


//Aca seteamos el listening del server
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("conexión con la base de datos correcta");
    console.log("%s listening at 3001");  // eslint-disable-line no-console
  });
});
