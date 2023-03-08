const Task = require("../models/Task")
const asyncWrapper = require("../middleware/async")
const {createCustomError} =require("../errors/custom-error")

const getAllTasks = asyncWrapper( async (req, res) => {
    console.log("-getting resources...\n")
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

const createTask = asyncWrapper( async (req, res) => {
        console.log("-creating resource...\n")
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const getTask = asyncWrapper( async (req, res, next) => {
    console.log("-getting resource...\n")
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task) {
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})
})

const updateTask = asyncWrapper( async (req, res, next) => {
    console.log("-updating resource...\n")
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true,
        })
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})
})

const deleteTask = asyncWrapper( async (req, res, next) => {
    console.log("-deleting resource...\n")
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task) {
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }
        res.status(200).send()

})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}