const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Fetch banner details
router.get('/', (req, res) => {
    db.query('SELECT * FROM banner WHERE id = 1', (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

// Update banner details
router.post('/', (req, res) => {
    const { description, timer, link, isVisible } = req.body;
    db.query('UPDATE banner SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1',
        [description, timer, link, isVisible], (err, result) => {
            if (err) throw err;
            res.json({ message: 'Banner updated successfully' });
        });
});

module.exports = router;
