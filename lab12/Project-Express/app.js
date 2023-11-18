const express = require('express');
const path = require('path');

const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router');

const app = express();

app.use(express.urlencoded());

app.use('/public', express.static(path.join(__dirname, 'public', 'resources', 'css')));
app.use('/public', express.static(path.join(__dirname, 'public', 'resources', 'images')));

//Add product & user
app.use(productRouter);
app.use(userRouter);

//Handling 500 code
app.use('/err', (req, res, next) => {
    throw new Error('WRONG URL!!!!');
})

//Handling 404 page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'));
});

app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error!');
});

app.listen(3000, () => console.log('Running in 3000'));