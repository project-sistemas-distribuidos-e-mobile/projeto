import { Router } from "express";
import CryptoJS from 'crypto-js';

const login = Router();

login.post('/login', (req, res) => {
    let user;
    let password;
    if(res.status(200)){
        user = req.query['user'];
        password = req.query['password'];
        res.json({"status": "success"});
    } else if(res.status(401)){
        res.json({"status": "error"});
    }
    console.log(user, password);
})
export {login};