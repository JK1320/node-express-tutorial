const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware - if we don't use this we won't have data in req.body as req sends data in json
app.use(express.json());

// routes
app.get('/hello', (req, res)=>{
    res.send("Task manager App")
})

app.use('/api/v1/tasks', tasks);


// app.get('/api/v1/tasks')             -get all tasks
// app.post('/api/v1/tasks')            -create a new task
// app.get('/api/v1/tasks/:id')         -get single task
// app.patch('/api/v1/tasks/:id')       -update task
// app.delete('/api/v1/tasks/:id')      -delete a task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
      console.log(err);
  }
};

start();