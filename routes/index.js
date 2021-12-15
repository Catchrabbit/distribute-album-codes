var express = require('express');
var router = express.Router();
var utils = require('../utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { error: false });
});

router.post('/', function(req, res, next) {
  const downloadCode = req.body.download_code
  
  if (!downloadCode) {
    res.redirect('/')
  }

  const slugifiedDownloadCode = utils.slugify(downloadCode);
  res.redirect(`/d/${slugifiedDownloadCode}`)
});

module.exports = router;
