const { User, validation } = require("../models/User");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const { error, value } = validation(name, email, password);

  if (error) {
    return res.status(400).json({
      sucess: false,
      error: error.message,
    });
  }
  //Check email is allready register
 
  let user = await User.findOne({ email: email });

  if (user) {
    return res.status(400).json({
      sucess: false,
      error: "Already registerd",
    });
  }

  user = await User.create(req.body);

  //crate Token
  let token = await User.generateToken(user.id)
  
  res
  .status(201)
  .cookie('Token',token,{maxAge: Date.now() + 3600 * 1000 , httpOnly: true})
  .json({
    sucess: true,
    data: {
      user:user.id,
      token:token
  }
  });

};

const login = async (req, res) => {
  const { email, password } = req.body;

  //Validating User Login details

  let { error, value } = await User.loginValidate(email, password);
  if (error) {
    return res.status(400).json({
      sucess: false,
      error: error.message,
    });
  }

  let user = await User.findOne({email:email})

  if(!user){
      return  res.status(400).json({
      sucess:false,
      error:"Invalid Email"
    })
  }

  //Check Whether Enter Password Is Valid
  let login = await User.comparePassword(password,user.password)
 
  if(!login){
    return res.status(400).json({
      sucess:false,
      error:"Invalid Password"
    })
  }

    //crate Token
  let token = await User.generateToken(user.id)

  res
  .status(200)
  .cookie('Token',token,{maxAge: Date.now() + 3600 * 1000 , httpOnly: true})
  .json({
    sucess: true,
    data: user.id,
    token:token
  });
};

const dashboard = async (req, res) => {
  res.json({
    sucess:true,
    data:req.user
  })
};

module.exports = {
  register,
  login,
  dashboard,
};
