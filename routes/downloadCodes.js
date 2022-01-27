var express = require('express');
var router = express.Router();
var utils = require('../utils');

router.get('/:downloadCode', async function(req, res, next) {
  const albumCodeData = await utils.loadAlbumCodeData();
  
  for (const [
      albumCode,
      betterAngelsCode,
      nobodyReallyCode,
      autumnesqueCode,
      theFutureIsGayCode,
      foldingInThirdsCode,
      clutterCode,
      moonlightTrialsCode
    ] of albumCodeData) {
    const slugifiedAlbumCode = utils.slugify(albumCode)
    
    if (req.params.downloadCode == slugifiedAlbumCode || decodeURI(req.params.downloadCode) == albumCode) {
      res.render('download-codes.ejs', {
        albumCode,
        tracks: [
          {
            name: 'Better Angels',
            code: betterAngelsCode,
            releaseDate: new Date(2021, 11, 18)
          },
          {
            name: 'Nobody Really Knows',
            code: nobodyReallyCode,
            releaseDate: new Date(2021, 11, 18)
          },
          {
            name: 'Autumnesque',
            code: autumnesqueCode,
            releaseDate: new Date(2022, 0, 28)
          },
          {
            name: 'The Future is Gay',
            code: theFutureIsGayCode
          },
          {
            name: 'Folding in Thirds',
            code: foldingInThirdsCode
          },
          {
            name: 'Clutter',
            code: clutterCode
          },
          {
            name: 'Moonlight Trials',
            code: moonlightTrialsCode
          }
        ]
      });
    }
  }

  res.render('index.ejs', { error: '🔮 not found. Try again or email us at catchrabbitband@gmail.com' })
});

module.exports = router;
