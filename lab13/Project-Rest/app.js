const express = require('express');

const bookRouter = require('./routes/book-router');

const app = express();

app.use(express.json());

app.use('/books', bookRouter);

//Server Error
app.use((err, req, res, next) => {
    res.status(500).send(`500!! SOS !! ${err.message}`);
})

const port = 3000;
app.listen(port, () => {
    console.log(`Listen on localhost:${port}`);
})