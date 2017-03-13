var express = require('express');
var router = express.Router();

/* GET matrix page. */
router.get('/', function(req, res, next) {
    res.render('cmatrix');
});

module.exports = router;
