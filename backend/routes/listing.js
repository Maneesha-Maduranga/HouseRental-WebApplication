const express = require('express')
const router = express.Router()
const {getallListing,getlListing,postlListing,updateListing,removelListing} = require('../controllers/listing')

//@Get All Listing
//@sec public
router.get('/', getallListing)

//@Get Single Listing
//@sec public
router.get('/:id', getlListing)



//@Post Listing
//@sec Only For the Publish Users
router.post('/', postlListing)



//@update Listing
//@sec Only For The Author
router.put('/:id', updateListing)


//@Delete Listing
//@sec only For the Author
router.delete('/:id', removelListing)

module.exports = router