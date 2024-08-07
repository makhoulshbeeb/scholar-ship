import { User } from "../models/user.model";
import JWT from "jsonwebtoken";

export const userAuth = async (req, res) => {
        if (req.headers && req.headers.authorization) {
            let authorization = req.headers.authorization;
            let decoded;
            try {
                decoded = JWT.verify(authorization, process.env.JWT_SECRET, {algorithms: [process.env.JWT_ALGO]});
            } catch (e) {
                res.send("Token not valid");
                return;
            }
            let userId = decoded.id;
            User.findOne({ _id: userId })
                .then((user) => {
                    if (user.isAdmin){
                        return user;
                    }else{
                        res.send("Admin Authorization Required");
                        return;
                    }
                })
                .catch((err) => {
                    res.send("Token error");
                    return;
                })
        } else {
            res.send("No token found");
            return;
        }
}

