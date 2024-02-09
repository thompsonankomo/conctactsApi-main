const express = require('express');
const router = require('express').Router();
const contactsController = require('../controller/contacts');

// Get all contacts route
router.get('/', contactsController.getAll);

// Get sigle contact route
router.get('/:id', contactsController.getSingle);

// Create new contact route
router.post('/', contactsController.createContact);

// Update contact route
router.put('/:id', contactsController.updateContact);

// Delete contact route
router.delete('/:id', contactsController.deleteContact);

module.exports = router;