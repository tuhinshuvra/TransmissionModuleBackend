const express = require("express");
const app = express();
const cors = require("cors");

// const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

const wifiConnectionRoute = require('./routes/v1/wifiConnection.route')
const userRoute = require('./routes/v1/user.route')


// routes
app.use('/api/v1/wificonnection', wifiConnectionRoute)
app.use('/api/v1/user', userRoute)

app.get("/", (req, res) => {
  res.send("Congratulation! Transmission module server is running.");
});


module.exports = app;