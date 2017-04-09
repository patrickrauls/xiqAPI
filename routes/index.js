const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello it\'s me');
})
module.exports = router;