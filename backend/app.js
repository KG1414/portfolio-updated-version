require('dotenv').config();
const express = require("express");
const request = require("request");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const apiKey = process.env.API_KEY;
const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=Melbourne&units=m`;   // http://api.weatherstack.com/current

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/weather", (req, res) => {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body));
            console.log(JSON.parse(body));
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port:${port}`));