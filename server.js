const express = require('express');
const theLoger = require('morgan');
const Task = require('./models/task.js')
const app = express();
const db = require('./db')
app.use(express.json());

app.use(theLoger('dev'));

app.post('/tasks', async (req, res) => {
    const newTask = await Task.create({
      text: "Clean Our Room",
      isComplete: true
    })
    res.send(newTask)
  })

  // GET all tasks
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
  });
  
  // PUT (update) a task's isComplete by ID
  app.put('/tasks/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { isComplete: req.body.isComplete },
      { new: true }
    );
    res.send(updatedTask);
  });
  
  // DELETE a task by ID
  app.delete('/tasks/:id', async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.send(deletedTask);
  });

// base route
app.use('/', (req, res) => {
res.send('we get a connection !!!');
});
let port = 3000;
app.listen(port, () => {
    console.log(`We are on port ${port}`)
})
