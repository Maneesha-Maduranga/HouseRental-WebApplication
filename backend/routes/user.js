const express = require('express')

const router = express.Router()

//@Only for The admin user
const {getallUser,getsingleUser,deleteUser} = require('../controllers/user')

//Auth Middleware
const {protect,grant} = require('../middleware/authmiddleware')

router.use(protect)
router.use(grant(['admin']))


router.get('/', getallUser)

router.get('/:id',getsingleUser)

router.delete('/:id', deleteUser)


module.exports = router