const express = require('express');
require('dns').setServers(['8.8.8.8'])
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});