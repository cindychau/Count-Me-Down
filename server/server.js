const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

//using these thoughout the app
app.use(cors());
app.use(express.json());

//mongoDB Atlas connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongoose database connection established successfully');
});

//routes - require routers
// const holidayRouter = require('../routes/holiday');
const personalRouter = require('../routes/personal');
// const workRouter = require('../routes/work');

//routes - use
// app.use('/holiday', holidayRouter);
app.use('/personal', personalRouter);
// app.use('/work', workRouter);

// if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });
// }

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
