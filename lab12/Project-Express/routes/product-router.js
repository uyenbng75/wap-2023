const express = require('express');
const path = require('path');

const router = express.Router();

module.exports = router;

router.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'product.html'))
});

router.post('/product', (req,res) => {
    res.send('Added: ' + `${req.body.name}, ${req.body.price}`);
})
