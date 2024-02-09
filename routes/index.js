const router = require('express').Router();
const contacts = require('./contacts');
const swagger = require('./swagger');

// Main router middle ware, index route
router.get('/', (req, res) => {
    //#swagger.tags=['Welcome Message']
    res.send( "<center><h1 style='color:blue; padding-top: 15rem; font-size:6rem'>Welcome, this is my CSE 341 Contacts Project Home Page: Part-2</h1></center>");
})

router.use('/', require('./swagger'));

router.use('/contacts', require('./contacts'));

module.exports = router;