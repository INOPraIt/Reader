const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const router = require('./router/index');
const errorMiddleware = require('./middelwares/error.middleware');


const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);
app.use(errorMiddleware)

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/postplatform', { useNewUrlParser: true, useUnifiedTopology: true })
    app.listen(PORT, console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

start();

