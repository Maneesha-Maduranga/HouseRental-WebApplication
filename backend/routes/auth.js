const express = require('express')
const router = express.Router()
const {register,login,dashboard,logout} = require('../controllers/auth')
const {protect} = require('../middleware/authmiddleware')

//@des /api/v1/auth/register
//@sec public


router.post('/register', register)

//@des /api/v1/auth/login
//@sec public

router.post('/login', login)

//@des /api/v1/auth/me
//@sec private

router.get('/me',protect, dashboard)



//@des /api/v1/auth/logout
//@sec public

router.post('/logout', logout)



module.exports = router