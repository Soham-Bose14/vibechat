const express = require('express');
const dotenv = require('dotenv');
const { contacts } = require('./records/info');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errors');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.post("/", (req, res) => {
    res.send("API is running successfully.");
});

app.get("/contacts", (req, res) => {
    res.send(contacts);
});

app.get("/contacts/:id", (req, res) => {
    const singleContact = contacts.participants.find((c) => c._id === req.params.id);
    res.send(singleContact);
});

app.use("/", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));