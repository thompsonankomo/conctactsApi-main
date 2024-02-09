require('dotenv').config();
const ObjectId = require('mongoose').Types.ObjectId;
const Contacts = require('../models/contacts');


// GET all contacts
// controllers/contacts.js
const getAll = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const result = await Contacts.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// GET a single contact by ID
const getSingle = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const id = new ObjectId(req.params.id)
    const result = await Contacts.findOne({ _id: id })

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//Create new contact function
const createContact = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
      
      
    }
    const result = await Contacts.create(data);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' } || 'some error occured while updating the user.');
  }


};

//Update contact function
const updateContact = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const id = new ObjectId(req.params.id)
    const data = {
      _id: id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    
      
    }
    const result = await Contacts.replaceOne({ _id: id }, data)
    if (result.modifiedCount > 0) {
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' } || 'some error occured while updating the user.');
  }
};

//Delete contact function
const deleteContact = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const id = new ObjectId(req.params.id)
    const result = await Contacts.deleteOne({ _id: id });
    if (result.deletedCount > 0) {
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' } || 'some error occured while updating the user.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
}