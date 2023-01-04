const express = require('express');
const ChickenModel = require('../Models/chicken');
const FarmyardModel = require('../Models/farmyard');
const router = express.Router()
module.exports = router;

router.post('/farmyard', async (req, res) => {
    const data = new FarmyardModel({
        name: req.body.name
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Post Method
router.post('/chicken', async (req, res) => {
    const data = new ChickenModel({
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        farmyard: req.body.farmyard
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/chicken', async (req, res) => {
    try{
        const data = await ChickenModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/chicken/:id', async (req, res) => {
    try{
        const data = await ChickenModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/chicken/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await ChickenModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Run
router.put('/chicken/:id/run', async (req, res) => {

    try {
        let chicken = await ChickenModel.findOne({where: {
                id: req.params.id
            }})
            chicken.isRunning = true,
            chicken.steps = chicken.steps + 1
            const result = await ChickenModel.findByIdAndUpdate(
                id, updatedData, options
            )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
    

});

//Delete by ID Method
router.delete('/chicken/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ChickenModel.findByIdAndDelete(id)
        res.send(`Chicken ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})