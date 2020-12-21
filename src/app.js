const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 9000;
// Defining paths

//GET commands
app.get("/user", (req, res) => {
  res.send({
    name: "Tore",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: "Adress must be provided",
    });
  }
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({
        error,
      });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        error;
      }

      res.send({
        location,
        forecast: forecastData,
        address,
      });
    });
  });
});

app.get("/city", (req, res) => {
  res.send({
    city: "Atyrau",
  });
});

//get not found
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found",
  });
});

//Serving app to localhost
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
