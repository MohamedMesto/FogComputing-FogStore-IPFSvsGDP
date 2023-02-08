const router = require('express').Router();

router.use('/v1', require('./routes/temperature'))

module.exports = router;
