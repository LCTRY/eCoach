const express = require('express')
const router = express.Router()
const {
    getDrill,
    getAllDrils,
    createDrill,
    // updatePractice,
    deleteDrill
} = require('../controllers/practiceController')

router.get('/:id', getDrill)
router.get('/', getAllDrils)
router.post('/', createDrill)
// router.put('/:id', updatePractice)
router.delete('/:id', deleteDrill)

module.exports = router