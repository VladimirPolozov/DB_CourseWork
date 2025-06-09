const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

router.get('/', collectionController.getIndex);

router.get('/collections/:name', collectionController.getCollection);

router.get('/collections/:name/new', collectionController.getNewForm);
router.post('/collections/:name', collectionController.createItem);

router.get('/collections/:name/:id/edit', collectionController.getEditForm);
router.put('/collections/:name/:id', collectionController.updateItem);

router.delete('/collections/:name/:id', collectionController.deleteItem);

module.exports = router;