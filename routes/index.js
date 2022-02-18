const router = require('express').Router();
//  Include all of the API rights from api/index.js
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('Page is not found!');
});

module.exports = router;