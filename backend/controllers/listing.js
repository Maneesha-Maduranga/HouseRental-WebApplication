const { Listing, validate } = require("../models/Listing");

//Get All Listing Houses
const getallListing = async (req, res) => {
  const listings = await Listing.find({});

  res.status(200).json({
    success: true,
    count: listings.length,
    data: listings,
  });
};

//Get Getail House Listing
const getListing = async (req, res) => {

  let id = req.params.id;

  const listing = await Listing.findById(id);

  res.status(200).json({
    success: true,
    data: listing,
  });
};

//Create New Listing 
const postlListing = async (req, res) => {

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
    return res.status(400).json({
      success: false,
      error: error.message,
    });
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
    return res.status(400).json({
      success: false,
      error: "No Listing with given id",
    });
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
    return res.status(400).json({
      success: false,
      error: error.message,
    });
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

    let listing = await Listing.findById(id)

    if(!listing){
       return res.status(400).json({
            success:false,
            error:'No Listing with Given Id'
        })
    }

    await Listing.findByIdAndRemove(id)

    res.status(200).json({
        success:true,
        data:{}
    })


};







module.exports = {
  getallListing,
  getListing,
  postlListing,
  updateListing,
  removelListing,
};

