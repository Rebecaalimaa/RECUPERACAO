const express = require('express')
const router = express.Router();

const clientes = require('./controllers/clientes')
const carros = require('./controllers/carros')
const telefone = require('./controllers/telefone')


const teste = (req, res)=>{
    res.json("API respondendo com sucesso");
}

router.get('/', teste);
router.post("/clientes",clientes.create);
router.get("/clientes",clientes.read);

router.get('/', teste);
router.post("/carros",carros.create);
router.get("/carros",carros.read);

router.get('/', teste);
router.post("/telefone",telefone.create);
router.get("/telefone",telefone.read);

module.exports = router;

