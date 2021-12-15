var express = require('express');
var router = express.Router();

router.get('/:downloadCode', function(req, res, next) {
  res.render('download-codes.ejs', { title: 'CATCHRABBIT' });
});

module.exports = router;
