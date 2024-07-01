//dependencies
const path = require('path');
const express = require('express')

const PORT =3000

const app = express();

app.use(express.json());

//HTML route
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/notes.html'))
);

//Save new notes route

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a new note`);

    const { title, text } = req.body})
