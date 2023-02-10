const express = require('express')
const router = express.Router()
const {register,login,dashboard} = require('../controllers/auth')
const {protect} = require('../middleware/authmiddleware')

//@des /api/v1/auth/register
//@sec public

router.post('/register', register)

//@des /api/v1/auth/login
//@sec public

router.post('/login', login)

//@des /api/v1/auth/me
//@sec private

router.post('/me',protect, dashboard)


module.exports = router