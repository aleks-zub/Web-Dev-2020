const express = require('express');
const router = express.Router();
const announs = require('../controllers/announs.controller');

//POST - створити одну обяву
router.post('/', announs.create);

//GET - всі обяви
router.get('/', announs.findAll);

//GET + id - одна обява
router.get('/:id', announs.findOne);

//PUT - оновити
router.put('/:id', announs.update);

//DELETE - видалити
router.delete('/:id', announs.deleteAnnoun);

module.exports = router;