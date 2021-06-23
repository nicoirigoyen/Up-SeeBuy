const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const filterRoutes = require('./Filter.js')
const singinRoutes = require('./Users.js')
const ProdcutsRoute = require('./Products.js')
const router = Router();

//========================================================//


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/singin', singinRoutes);
router.use('/products', ProdcutsRoute)
// router.use('/filter', filterRoutes);

module.exports = router;
