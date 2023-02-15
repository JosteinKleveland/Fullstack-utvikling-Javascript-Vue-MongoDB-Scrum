const User = require('../model/user');

module.exports = class userAPI {
    //test function
    static async fetchUsers(req,res){
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({message: err.message});
        }
    }
    static async updateUser(req,res){
        try {
            const users = await User.update({"lastName": "Selliken"}, {"lastName": "Jostein@gmail.com"});
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({message: err.message});
        }
    }
    static async fetchUserById(req,res){
        try {
            const users = await User.findById(req.params._id);
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
}