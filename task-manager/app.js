const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

// load environment variables from a .env file into process.env
require('dotenv').config();

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
    // Since we should always spawn the server
    // once we are connected to the DB
    // we wait for the connection to establish
    //
    // Note: Since we wrap the below code in try-catch
    // connection is not established,
    // server will not start, flow will go to the catch block
    await connectDB(process.env.ATLAS_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
