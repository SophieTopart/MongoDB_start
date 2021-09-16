const WilderModel = require('../models/Wilder')

module.exports = {
    create: async (req, res) => {
        try {
            await WilderModel.init()
            const wilder = new WilderModel(req.body)
            const result = await wilder.save()
            res.json({ success: true, result: result })
        } catch (err) {
            res.status(400).json({ success: false, result: err.message })
        }
    },

    retrieveAll: async (req, res) => {
        try {
            const wilder = await WilderModel.find()
            if (!wilder) res.json({ success: false, result: 'No wilder found' })

            res.status(200).json({ success: true, result: wilder })
        } catch (err) {
            res.status(400).json({ success: false, result: err.message })
        }
    },

    retrieveOne: async (req, res) => {
        try {
            const wilder = await WilderModel.findById({ _id: req.body._id })
            if (!wilder) {
                res.json({
                    success: false,
                    result: `This wilder doesn't exist`,
                })
            } else {
                res.json({ success: true, result: wilder })
            }
        } catch (err) {
            res.status(400).json({ success: false, result: err.message })
        }
    },

    update: async (req, res) => {
        try {
            const wilder = await WilderModel.updateOne(
                { _id: req.body._id },
                req.body,
                { new: true }
            )
            if (!wilder) {
                res.json({
                    success: false,
                    result: `This wilder doesn't exist`,
                })
            } else {
                res.json({ success: true, result: wilder })
            }
        } catch (err) {
            res.status(400).json({ success: false, result: err.message })
        }
    },

    delete: async (req, res) => {
        try {
            const wilder = await WilderModel.deleteOne({ _id: req.body._id })
            if (!wilder) {
                res.json({
                    success: false,
                    result: `This wilder doesn't exist`,
                })
            } else {
                res.json({ success: true, result: wilder })
            }
        } catch (err) {
            res.status(400).json({ success: false, result: err.message })
        }
    },
}
