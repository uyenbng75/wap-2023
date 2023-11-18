const express = require('express');
const path = require('path');

const router = express.Router();

module.exports = router;

router.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'user.html'))
});

router.post('/user', (req,res) => {
    res.send('Added: ' + `${req.body.id}, ${req.body.type}`);
})
