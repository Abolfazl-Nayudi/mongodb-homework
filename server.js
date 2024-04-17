require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { router } = require('./routes/faculty.route');
const { db } = require('./db/mongo.config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', router);

const PORT = process.env.PORT || 4000;

const start = async () => {
  await db(process.env.MONGO_URI);
  app.listen(PORT, () => console.log('server is running on port ' + PORT));
};

start();
