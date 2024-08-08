import { User } from "../models/user.model.js";
import JWT from "jsonwebtoken";

export const userAuth = async (req, res, next) => {

        if (req.headers && req.headers.authorization) {
            let authorization = req.headers.authorization;            
            let decoded;
            try {
                decoded = JWT.verify(authorization, process.env.JWT_SECRET);
            } catch (e) {
                return res.send("Token not valid");
            }
            let userId = decoded.id;
            User.findOne({ _id: userId })
                .then((user) => {
                    return next();
                })
                .catch((err) => {
                    return res.send("Token error");  
                })
        } else {
            return res.send("No token found");
        }
}

