const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

const format = require('date-format');

app.get('/', (req, res) => {
    res.status(200).send("<h1 style='color: #e05320'>Hello, Sandeep!</h1>")
});


app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: "pnvsandeep",
        followers: 115,
        follows: 46,
        date: format.asString("dd-MM-yyyy  - hh:mm:ss", new Date()),
    };
    res.status(200).json(instaSocial);
});

app.get('/api/v1/facebook', (req, res) => {
    const faceSocial = {
        username: "sandeepparimi",
        followers: 88,
        follows: 10,
        date: format.asString("dd-MM-yyyy  - hh:mm:ss", new Date()),
    };
    res.status(200).json(faceSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
    const linkSocial = {
        username: "Parimi Naga Venkata Sandeep",
        followers: 20,
        follows: 21,
        date: format.asString("dd-MM-yyyy  - hh:mm:ss", new Date()),
    };
    res.status(200).json(linkSocial);
});

app.get('/api/v1/:token', (req, res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});

//#e05320 - orange
//#28a745 - green
//#3880be - blue
