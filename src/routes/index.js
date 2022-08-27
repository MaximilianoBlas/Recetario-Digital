const { Router } = require('express');
const  Recipe = require("./Recipe")
const Diet = require("./Diet"); 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
 
 
// Configurar los routers 
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', Recipe);
router.use("/diets", Diet); 

module.exports = router; 
