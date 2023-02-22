const { response } = require("express");
const User = require("../model/user");

module.exports = class userAPI {

    static async signUp(req, res, next) {
        try {
            const user = await User.create(req.body);
            res.status(201).json({
                success: true,
                user
            })
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
    static async signIn(req, res, next) {
        try {
            const user = await User.findOne({"email": req.body.email, "password": req.body.password},
            {"email": 0, "password": 0, "phone": 0});
            if(user == null) {
                res.status(404).json({
                    success: false,
                    message: "Invalid login"
                })
            } else {
                res.status(201).json({
                success: true,
                user
            })
        }
        } catch (err) {
            console.log(err);
            next(err);
        }
    } 
    static async fetchUser(req, res, next) {
        try {
            const user = await User.findOne({"_id": req.params._id});
            if(user == null) {
                res.status(404).json({
                    success: false,
                    message: "No user with such ID"
                })
            } else {
                res.status(201).json({
                success: true,
                user
            })
        }
        } catch (err) {
            
        }
    }
}