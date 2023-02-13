const User = require('../model/user')
exports.signin = async(req, res, next)=>{

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