const { DecodeToken } = require("../utility/TokenHelper");

module.exports = (req, res, next) => {
  token = req.cookies["Token"];

  let decoded = DecodeToken(token);

  console.log(decoded);

  if (decoded === null) {
    return res.status(401).json({
      status: 401,
      message: "Invalid Token",
    });
  } else {
    req.headers.email = decoded["email"];
    req.headers._id = decoded["_id"];
    next();
  }
};
