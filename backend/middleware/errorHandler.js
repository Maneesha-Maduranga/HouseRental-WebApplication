const CustomError = require("../utils/customError");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err.name == "CastError") {
    return res.status(400).json({ error: "Bad Object Id", sucess: false });
  }

  if (err instanceof CustomError) {
    return res
      .status(err.statusCode)
      .json({ error: err.message, sucess: false });
  }
  else{
    return res.status(500).send("Something Failed Please try Again");
    
  }
  
};

module.exports = errorHandlerMiddleware;
