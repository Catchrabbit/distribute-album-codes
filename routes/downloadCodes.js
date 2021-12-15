var express = require('express');
var router = express.Router();
var utils = require('../utils');

router.get('/:downloadCode', async function(req, res, next) {
  const albumCodeData = await utils.loadAlbumCodeData();
  
  for (const [albumCode, betterAngelsCode, nobodyReallyCode, autumnesqueCode] of albumCodeData) {
    const slugifiedAlbumCode = utils.slugify(albumCode)

    if (req.params.downloadCode == slugifiedAlbumCode) {
      res.render('download-codes.ejs', {
        betterAngelsCode,
        nobodyReallyCode,
        autumnesqueCode,
      });
    }
  }

  res.render('index.ejs', { error: '🔮 not found. Try again or email us at catchrabbitband@gmail.com' })
});

module.exports = router;
