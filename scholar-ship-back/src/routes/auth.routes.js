import {Router} from 'express'

import {
    logInUser,
    signUpUser
} from '../controllers/auth.controller'


const router = new Router();


router.post("/login", logInUser);
router.post("/signup", signUpUser);


export default router;