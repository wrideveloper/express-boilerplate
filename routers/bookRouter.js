const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')

router.get('/', bookController.index)
router.get('/create', bookController.create)
router.post('/', bookController.store)
router.get('/:id/edit', bookController.edit)
router.put('/:id', bookController.update)
router.delete('/:id', bookController.destroy)

module.exports = router
