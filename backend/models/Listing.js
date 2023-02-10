const mongoose = require('mongoose')
const Joi = require('joi');


const ListingSchema = new mongoose.Schema({
      title: {
        type: String,
        required: [true],
      },
      address: {
        type: String,
        required: [true],
      },
      city: {
        type: String,
        required: [true],
      },
      description: {
        type: String,
      },
      price:{
        type:Number,
        required: [true],
      },
      rooms:{
        type:Number,
        required: [true],
      },
      bedroom:{
        type:Number,
    },
      publisher: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true
      },
    
});

const Listing = mongoose.model('Listing', ListingSchema);


const validate = (title,address,city,description,price,rooms,bedroom) => {


    const schema = Joi.object({
        title: Joi.string().required(),
        address: Joi.string().required(),
        city:Joi.string(),
        description:Joi.string().max(150),
        price:Joi.number().required(),
        rooms:Joi.number().required(),
        bedroom:Joi.number()

    });
    
    return  schema.validate({ title,address,city,description,price,rooms,bedroom });

}


module.exports = {
    Listing,
    validate
}