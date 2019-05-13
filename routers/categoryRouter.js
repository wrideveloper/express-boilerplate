const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.index)
router.get('/:id', categoryController.show)
router.post('/', categoryController.store)
router.put('/:id', categoryController.update)
router.delete('/:id', categoryController.destroy)

module.exports = router
