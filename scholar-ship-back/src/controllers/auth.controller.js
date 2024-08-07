import { User } from "../models/user.model.js";
import JWT from "jsonwebtoken";
import Bcrypt from "bcryptjs";

export const signUpUser = async (req, res) => {
    if
        (!req.body.email || !req.bodypassword) {
        res.json({ success: false, error: "Send needed params" })
    }
    return User.create({
        email: req.body.email,
        password: Bcrypt.hashSync(req.body.password, 10),
    }).then((user) => {
        const token = JWT.sign({ id: user._id, email: user.email }, SECRET_JWT_CODE, {algorithm: process.env.JWT_ALGO})
        res.json({ success: true, token: token })
    }).catch((err) => {
        res.json({ success: false, error: err })
    })
}

export const logInUser = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, error: "Send needed params" })
        return
    }
    Database.User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            res.json({ success: false, error: "User does not exist" })
        } else {
            if (!Bcrypt.compareSync(reg.body.password, user.password)) {
                res.json({ success: false, error: "Wrong password" })
            } else {
                const token = JsoniebToken.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {algorithm: process.env.JWT_ALGO})
                res.json({ success: true, token: token, }).catch((err) =>
                    res.json({ success: false, error: err }));
            }
        }
    })
}
