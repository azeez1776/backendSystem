const express = require('express');

const router = express.Router();

//desc adding a contact
//route POST api/contacts
//acess Private
router.post('/', (req, res) => res.send("Added contact"));

//desc getting list of contacts
//route GET api/contacts
//acess Private
router.get('/', (req, res) => res.send("List contacts"));

//desc updating contact
//route PUT api/contacts/id
//acess Private
router.put('/:id', (req, res) => res.send("Contact updated"));

//desc deleting contact
//route DELETE api/contacts/id
//acess Private
router.delete('/:id', (req, res) => res.send("Contact deleted"));

module.exports = router;