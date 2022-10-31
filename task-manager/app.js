const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Task Manager App');
});

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
