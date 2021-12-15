var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const downloadCode = req.body.download_code
  
  if (downloadCode === 'aaa') {
    res.redirect('/d/aaa')
  }

  res.redirect('/')
});

module.exports = router;
