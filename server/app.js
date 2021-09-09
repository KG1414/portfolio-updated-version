require('dotenv').config();
const express = require("express");
const request = require("request");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const apiKey = process.env.API_KEY;
const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=Melbourne&units=m`;   // http://api.weatherstack.com/current

const mailAPI = process.env.MAIL_API_KEY;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.post("/", function (req, res) {
    //
});




app.get("/weather", (req, res) => {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const temp = data.current.temperature;
            const location = data.location.name;
            const icon = data.current.weather_icons;
            const weatherDescription = data.current.weather_descriptions;

            res.send({ temp });

        }
    })
});

app.listen(port, () => console.log(`Example app listening on port:${port}`));