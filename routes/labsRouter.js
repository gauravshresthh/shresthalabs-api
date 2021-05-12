const express = require('express');
const router = express.Router();

const labsController = require('../controllers/labsController');

router.get('/', labsController.getAllLabs);

router.get('/:id', labsController.getLab);

router.post('/', labsController.createLab);

router.put('/:id', labsController.updateLab);

router.delete('/:id', labsController.deleteLab);

module.exports = router;
