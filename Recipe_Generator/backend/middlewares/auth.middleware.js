const { UnAuthorized } = require("../exception-handling/CustomErrors");
const { verifyToken } = require("../utils/JwtUtils");

exports.protectRoute = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  
  try {
    const token = bearerToken.split(' ')[1];
    
    if (!token) {
      throw new UnAuthorized();
    }

    const decoded = verifyToken(token);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json('Unauthorized');
  }
}