const http = require('http');

const app = require('./app');
const mongoose = require('mongoose');
const { config } = require("dotenv");
const { connectDB } = require("../config/db");


const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

config({ path: __dirname + '/server/.env' });



mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});


async function startServer() {
  await connectDB();
  // await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
