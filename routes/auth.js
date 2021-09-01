const express = require('express');

const router = express.Router();

//desc user login
//route POST api/auth
//acess Public
router.post('/', (req, res) => res.send("user logged in"));

//desc getting user who logged in
//route GET api/auth
//acess Private
router.get('/', (req, res) => res.send("logged in user"));

module.exports = router;