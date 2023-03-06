const Tool = require('../model/tool')

module.exports = class toolApi {
    static async regTool(req, res, next) {
        try {
            const tool = await Tool.create(req.body);
            res.status(201).json({
                success: true, 
                tool
            })

        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async getToolId(req, res, next) {
        try {
            const tool = await Tool.findById(req.params._id);
            res.status(200).json({
                tool
            });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async getToolAll(req, res, next) {
        try {
            const tools = await Tool.find();
            res.status(200).json({
                tools
            });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
    static async getToolCategory(req, res, next) {
        try {
            const tools = await Tool.find({"category": req.params.category});
            //
            if(tools == null) {
                res.status(404).json({
                    success: false,
                    message: "No tools under category"
                })
                console.log("hammer?")
            } else {
                res.status(201).json({
                success: true,
                tools
            })
        }
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async delTool(req, res, next) {
        try {
            // Tests that the tool exists within the database before deletion. If not, throws an error
            const toolExists = await Tool.findById(req.params._id)
            if(toolExists == null) {
                res.status(404).json({
                    success: false,
                    message: "Object with id does not exist"
                });
            } else {
                const tool = await Tool.findByIdAndDelete(req.params._id);
                res.status(200).json({
                    success : true
                });
            }
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async rentTool(req, res, next) {
        try {
            const tool = await Tool.findByIdAndUpdate(req.params._id, {renterEmail : req.params.renterEmail});
            const updatedTool = await Tool.findById(req.params._id);
            res.status(200).json({
                success: true,
                tool,
                updatedTool
            });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async editTool(req, res, next) {
        try {
            const tool = await Tool.findByIdAndUpdate(req.params._id, req.body);
            const updatedTool = await Tool.findById(req.params._id);
            res.status(200).json({
                success: true,
                tool,
                updatedTool
            });
        } catch (error) {
            console.log(err);
            next(err);
        }
    }
}