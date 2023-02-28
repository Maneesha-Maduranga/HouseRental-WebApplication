const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.Token) {
    token = req.cookies.Token;
  }

  if (token) {
    //Verify the Token
    try {
      let decoded = jwt.verify(token, process.env.JWT_SECREAT);

      let user = await User.findById(decoded.id)

      req.user = user;

      next();
    } catch (error) {
      
      res.status(401).json({
        sucess: false,
        error: "Not Authorized to acess The route",
      });
    }
  } else {
    res.status(401).json({
      sucess: false,
      error: "Not Authorized to acess The route",
    });
  }
};


const grant = (role) => {

  return (req,res,next) => {

      if(role.includes(req.user.role)){

          next()
          
      }
      else{
         return res.status(401).json({
              sucess:false,
              err:"You dont Have Permission"
          })
      }
  }
}

module.exports = {
  protect,
  grant,
};
