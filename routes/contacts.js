const express = require('express');
const auth = require('../middleware/auth');
const Contacts = require('../models/Contacts');
const { check, validationResult } = require('express-validator');
const router = express.Router();

//desc adding a contact
//route POST api/contacts
//acess Private
router.post('/', [auth, [
    check('name', 'Please fill in the name')
        .not()
        .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
        const newContact = await new Contacts({
            name,
            email,
            phone,
            type,
            user: req.user.id,
        });

        const contacts = await newContact.save();
        res.json(contacts);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");

    }
});

//desc getting list of contacts
//route GET api/contacts
//acess Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contacts.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Token not available' });
    }
});

//desc updating contact
//route PUT api/contacts/id
//acess Private
router.put('/:id', (req, res) => res.send("Contact updated"));

//desc deleting contact
//route DELETE api/contacts/id
//acess Private
router.delete('/:id', (req, res) => res.send("Contact deleted"));

module.exports = router;