const express = require('express');
const dotenv = require('dotenv');
const { contacts } = require('./records/info')

const app = express();
dotenv.config();

app.post("/", (req, res) => {
    res.send({
        "jobDescription":"",
    });
});

app.get("/contacts", (req, res) => {
    res.send(contacts);
});

app.get("/contacts/:id", (req, res) => {
    const singleContact = contacts.participants.find((c) => c._id === req.params.id);
    res.send(singleContact);
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));