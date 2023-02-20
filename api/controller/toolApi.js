const Tool = require('../model/tool')

module.exports = class toolAPI {
    static async regTool(req, res) {
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

    static async getToolId(req, res) {
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

    static async getToolAll(req, res) {
        try {
            const tools = await Tool.find();
            res.status(200).json({
                tool
            });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async delTool(req, res) {
        try {
            const tool = await Tool.deleteOne(req.params._id);
            res.status(204);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async rentTool(req, res) {
        try {
            const tool = await Tool.findOneAndUpdate(req.params._id, req.params._renterEmail);
            res.status(200);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async editTool(req, res) {
        try {
            const oldTool = await Tool.findOneAndUpdate(req.params._id, req.params._editList);
            res.status(200);
        } catch (error) {
            console.log(err);
            next(err);
        }
    }
}