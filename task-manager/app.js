const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Welcome to Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
