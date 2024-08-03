import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    // creating token from payload (payload=userId),
    // we also need a digital signature which is
    // JWT_SECRET from our .env file
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    // creating cookie from token
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,   // 15 days in miliseconds
        httpOnly: true,     // prevent XSS attacks (cross-site scripting attacks)
        sameSite: "strict"  // prevent CSRF attacks (cross-site request forgery attacks)
    });
}

export default generateTokenAndSetCookie;