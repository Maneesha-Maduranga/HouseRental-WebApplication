const { Listing, validate } = require("../models/Listing");
const CustomError = require('../utils/customError')


//Get All Listing Houses
const getallListing = async (req, res) => {
 
  let queary;
  
  if(req.query){
    const {address,city,sort} = req.query
    const quaryObject = {}
  
    if(address){
      quaryObject.address = address
    }
    if(city){
      quaryObject.city = { $regex : name, $options: 'i'}
    }
     
    queary = Listing.find(quaryObject).select('-publisher')

  }else{
    queary = Listing.find()
  }
 


  const listings = await queary;

  res.status(200).json({
    success: true,
    count: listings.length,
    data: listings,
  });
};

//Get Get One House Listing
const getListing = async (req, res) => {

  let id = req.params.id;

  const listing = await Listing.findById(id).populate({path:'publisher',select: 'name -_id '})

  res.status(200).json({
    success: true,
    data: listing,
  });
};

//Create New Listing 
const postlListing = async (req, res) => {

  let { title, address, city, description, price, rooms, bedroom } = req.body;

  req.body.publisher = req.user._id;

  let { error, value } = validate(
    title,
    address,
    city,
    description,
    price,
    rooms,
    bedroom
  );

  if (error) {
    throw new CustomError(error.message,400)
  }

  const listing = await Listing.create(req.body);

  res.status(201).json({
    success: true,
    data: listing,
  });
};


//Upadte Listing In the database
const updateListing = async (req, res) => {
  let id = req.params.id;

  let listing = await Listing.findById(id);

  if (!listing) {
    throw new CustomError("No Listing With Given Id",404)
  }


  //Check whether login User Is Publisher of the Listing
  if(listing.publisher.toString() !== req.user.id){
   throw new CustomError("Only Author can Update Listing",401)
  }
 

  let { title, address, city, description, price, rooms, bedroom } = req.body;

  let { error, value } = validate(
    title,
    address,
    city,
    description,
    price,
    rooms,
    bedroom
  );

  if (error) {
    throw new CustomError(error.message,404)
  }

  listing = await Listing.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    data: listing,
  });
};


//Remove Listing 
const removelListing = async (req, res) => {
  
    let id = req.params.id

    let listing = await Listing.findOne({'_id':id})

    if(!listing){
      throw new CustomError("No Listing With Given Id",404)
    }

     //Check whether login User Is Publisher of the Listing
    if(listing.publisher.toString() !== req.user.id){
      throw new CustomError("Only Author can Delete Listing",401)
    }
   

    await Listing.findByIdAndRemove(id)

    res.status(200).json({
        success:true,
        data:{}
    })


};


const uplaodImage = async (req,res,next) => {
  if(!req.file){
    throw new CustomError("Please upload Photo",400)
  }
  if(!req.file.mimetype.startsWith("image")){
    throw new CustomError("File format not valid",400);
  }
  req.file.filename = req.user.id
  
  res.status(200).json({
    success:true,
    data: req.file.filename
  })
  

}





module.exports = {
  getallListing,
  getListing,
  postlListing,
  updateListing,
  removelListing,
  uplaodImage
};

