const express = require('express');
const router = express.Router();


//desc registers users
//route POST api/users
//access public

router.post('/', (req, res) => res.send('Created user'));

module.exports = router;