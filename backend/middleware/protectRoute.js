import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import logger from "../utils/logger.js";

const protectRoute = async (req, res, next) => {
  try {
    // check if token is available
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }
    // check if token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
    // check if such a user exists
    //
    // we use decoded.userId because we have defined it before
    // in utils/generateToken.js:
    // const token = jwt.sign({ userId }, process.env.JWT_SECRET, ...
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // adding the user object (queried from database) 
    // to the request object, because
    // later we will use it in the message controller
    req.user = user;
    // this will call the next function, it means
    // in routes/message.route.js:
    // router.post("/send/:id", protectRoute, sendMessage);
    // the sendMessage function is called
    next();
  } catch (error) {
    logger.error(error, "Error in middleware:protectRoute");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
