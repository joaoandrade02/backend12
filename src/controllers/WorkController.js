const WorkUser = require("../models/WorkUser")

module.exports = {
    async store(req, res) {
        const usercreate = await WorkUser.create(req.body);
        return res.send(usercreate);
    },
    async list(req, res) {
        const userlist = await WorkUser.find({});
        return res.json(userlist);
    },
    async index(req, res) {
        const userindex = await WorkUser.findOne({ email: req.params.UserEmail });
        return res.json(userindex);
    },
    async update(req, res) {
        const userupdate = await WorkUser.findByIdAndUpdate(req.params.id, req.body, { new: true }
        );
        return res.json(userupdate);
    },
    async destroy(req, res) {
        await userdestroy.deleteOne({ _id: req.params.id });
        return res.json({message: "DELETOU MESMO MANO"});
    }
}