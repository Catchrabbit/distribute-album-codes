var express = require('express');
var router = express.Router();

/* GET download codes listing. */
router.get('/:downloadCode', function(req, res, next) {
  res.send(`download cooooode ${req.params['downloadCode']}`);
});

module.exports = router;