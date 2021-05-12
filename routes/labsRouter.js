const express = require('express');
const router = express.Router();

const labsController = require('../controllers/labsController');

router.route('/').get(labsController.getAllLabs).post(labsController.createLab);

router
	.route('/:id')
	.get(labsController.getLab)
	.put(labsController.updateLab)
	.delete(labsController.deleteLab);

module.exports = router;
