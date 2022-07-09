const express = require('express')
const router = express.Router()
const {
    getPractice,
    getAllPractices,
    createPractice,
    // updatePractice,
    deletePractice
} = require('../controllers/practiceController')

router.get('/:id', getPractice)
router.get('/', getAllPractices)
router.post('/', createPractice)
// router.put('/:id', updatePractice)
router.delete('/:id', deletePractice)

module.exports = router