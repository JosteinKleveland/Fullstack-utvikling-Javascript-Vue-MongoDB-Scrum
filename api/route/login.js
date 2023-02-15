const { Router } = require('express')
const user = require('../model/user')
const Todo = require('../model/user')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        if (!user) throw new Error('No Todo List found')
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log("Sjekk nummer 2");
        if (!user) throw new Error('Something went wrong saving the Todo')
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:_id', async (req, res) => {
    const { _id } = req.params
    try {
        const removed = await User.findByIdAndDelete(_id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router