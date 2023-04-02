const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email Is Required"],
    unique: true,
  },
  telephone: {
    type: String,
    required: [true, "Telephone Number Is Required"],
  },
  password: {
    type: String,
    required: [true, "Password Is Required"],
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin","publisher"],
      default: "user",
    },
  },
},);






//Hash password
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);

  next();
});


//Generate JWT Token
UserSchema.statics.generateToken = async function (id) {
 
    let token = await jwt.sign({id:id},process.env.JWT_SECREAT,{
      expiresIn:'15d'
    })

    return token;

}

//Login validatiion
UserSchema.statics.loginValidate = function (email, password) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate({ email, password });
};

//Compare Hash Password

UserSchema.statics.comparePassword = async function(password,hash){
  
  let login = await bcrypt.compare(password,hash)
  return login;

}

const User = mongoose.model("user", UserSchema);

//Joi Validation

const validation = (name, email, password,telephone) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    telephone:Joi.string().required()
  });

  return schema.validate({ name, email, password,telephone });
};

module.exports = {
  User,
  validation,
};
