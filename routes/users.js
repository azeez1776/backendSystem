const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');


//desc registers users
//route POST api/users
//access public

router.post('/',[check('name', 'Please include your name')
.not()
.isEmpty(),
check('email', 'Please include email')
.isEmail(),
check('password', 'Password must include 6 characters and more')
.isLength({min:6})
],
(req, res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    else{
        return res.send('passed');
    }
});

module.exports = router;