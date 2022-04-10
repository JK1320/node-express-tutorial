const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');

//get all tasks
 // response options
 //res.status(200).json({ tasks, amount: tasks.length });
  // res.status(200).json({ success: true, data: {tasks, nbHits: tasks.length} });
// res.status(200).json({ status: 'success', data: { tasks, nbHits: tasks.length } });
//res.status(200).json({ task: null, status: 'success' });
// res.status(200).send()
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});


//create new task
const createTask = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});
// this code without using asyncWrapper
// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({msg: error});
//   }  
// };


//get one task
const getTask = asyncWrapper( async (req, res, next) => {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID})
    if(!task){
      const error = new Error('Not Found');
      error.status = 404;
      return next(error)
      return res.status(404).json({msg: `No task with id ${taskID}`})
    }
    res.status(200).json({task});
});

// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };


//delete a task
const deleteTask = asyncWrapper( async (req, res) => {
 const { id: taskID } = req.params;
 const task = await Task.findOneAndDelete({_id: taskID})

  if(!task){
      return res.status(404).json({msg: `No task with id ${taskID}`})
    }
    res.status(200).json({task});
});

// const deleteTask = async (req, res) => {
//  try {
//   const { id: taskID } = req.params;
//   const task = await Task.findOneAndDelete({ _id: taskID });
//  if (!task) {
//     return res.status(404).json({ msg: `No task with id ${taskID}` });
//   }
//   res.status(200).json({ task });
// } catch (error) {
//   res.status(500).json({ msg: error });
// }


//   
// };


// update a task
const updateTask = asyncWrapper( async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
      new: true,
      runValidators: true,
    });

 if (!task) {
   return res.status(404).json({ msg: `No task with id ${taskID}` });
 };
   res.status(200).json({task}); 
});

// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;

//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!task) {
//       return res.status(404).json({ msg: `No task with id ${taskID}` });
//     }

//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}