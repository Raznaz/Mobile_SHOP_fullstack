require('dotenv').config();
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models/models.js');
const express = require('express');
const router = require('./routes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

// create first method GET

app.get('/', (req, res) => {
  res.status(200).json({ message: 'WORKING !!!' });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
