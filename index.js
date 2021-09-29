require('dotenv').config();
const path = require('path');
const express = require("express");
const request = require("request");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require('googleapis');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/", router);

// const contactEmail = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     auth: {
//         user: "kylegallardfs@gmail.com",
//         pass: process.env.PASS
//     },
// });

const code = '4%2F0AX4XfWi-jGnoOoNpmd9LzuHUSR80hOtiaKatxSCLU19MXzzQnWqeAsl2NICciDVBf8cd4Q';

const oauth2Client = new google.auth.OAuth2(
    process.env.GMAIL_OAUTH_CLIENT_ID,
    process.env.GMAIL_OAUTH_CLIENT_SECRET,
    process.env.GMAIL_OAUTH_REDIRECT_URL,
);

// const getToken = async () => {
//     const { tokens } = await oauth2Client.getToken(code);
//     console.info(tokens);
//   };

//   getToken();

// Generate a url that asks permissions for Gmail scopes
const GMAIL_SCOPES = [
    'https://mail.google.com/',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send',
];

const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: GMAIL_SCOPES,
});

console.info(`authUrl: ${url}`);

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_ADDRESS,
        clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
        clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
        accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN,
        expires: Number.parseInt(process.env.GMAIL_OAUTH_TOKEN_EXPIRE, 10),
    },
    tls: {
        rejectUnauthorized: false
    }
});


// transporter.set('oauth2_provision_cb', (user, renew, callback) => {
//     let accessToken = userTokens[user];
//     if (!accessToken) {
//         return callback(new Error('Unknown user'));
//     } else {
//         return callback(null, accessToken);
//     }
// });

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});



router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mailOptions = {
        from: name,
        to: "kylegallardfs@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});




// weather
// const apiKey = process.env.API_KEY;
// const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=Melbourne&units=m`;   // http://api.weatherstack.com/current

// const mailAPI = process.env.MAIL_API_KEY;

// app.get("/weather", (req, res) => {
//     request(url, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             const data = JSON.parse(body);
//             const temp = data.current.temperature;
//             const location = data.location.name;
//             const icon = data.current.weather_icons;
//             const weatherDescription = data.current.weather_descriptions;

//             res.send({ temp });

//         }
//     })
// });


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port:${port}`));