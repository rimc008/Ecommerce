import jwt from "jsonwebtoken"

export const verifyToken = async(req,res,next) => {

    try {
    
    //node automatically convert Authorization to authorization in object
    //{
    //   host: 'localhost:4001',
    //   authorization: 'Bearer abc123'
    // }
    
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    //getting the token
    const token = authHeader.split(" ")[1]

    //verify with secret key
    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    req.user = decoded;

    next();
    } catch (error) {
        res.status(201).json({
            success:false,message:"No token Generated or Invalid token"
        })
    }
}