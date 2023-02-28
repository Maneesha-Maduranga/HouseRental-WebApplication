const express = require('express')
const router = express.Router({mergeParams:true})
const {getallListing,getListing,postlListing,updateListing,removelListing,uplaodImage} = require('../controllers/listing')
const {protect,grant} = require('../middleware/authmiddleware')

const multer  = require('multer')
const upload = multer({ dest: 'images/' })



//@Get All Listing
//@sec public
router.get('/', getallListing)



//@Get Single Listing
//@sec public
router.get('/:id', getListing)

//@Get Listing For The Specifi User
//@sec private





//@Post Listing
//@sec Only For the Publish Users
router.post('/',protect, grant(['admin','publisher']),postlListing)



//@update Listing
//@sec Only For The Author
router.put('/:id',protect,grant(['admin','publisher']), updateListing)


//@Delete Listing
//@sec only For the Author
router.delete('/:id', protect,grant(['admin','publisher']), removelListing)


//@upload Photo

router.post('/photo', protect ,upload.single('file'), uplaodImage);

module.exports = router