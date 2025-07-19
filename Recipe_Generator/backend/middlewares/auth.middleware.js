const { UnAuthorized } = require("../exception-handling/CustomErrors");
const { verifyToken } = require("../utils/JwtUtils");

exports.protectRoute = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = bearerToken.split(' ')[1];

  try {
    const decoded = verifyToken(token);  
    req.userId = decoded.id;             
    next();                              
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
  }
}
