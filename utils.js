var csvParse = require('csv-parse/sync');
const fetch = require('node-fetch');

const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const loadAlbumCodeData = async () => {
  const googleDocId = '1LvT4fFFQddJr7XYQnsMfS8bGBPdb53zeRX-r3KzETmo'
  const sheetName = 'Sheet1'
  const googleDocSheetUrl = `https://docs.google.com/spreadsheets/d/${googleDocId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`
  const sheetUrl = googleDocSheetUrl

  try {
    const response = await fetch(sheetUrl)
    const body = await response.text()
    const albumCodes = csvParse.parse(body, { delimiter: ',' })

    return albumCodes
  } catch (e) {
    return e.message
  }
}

module.exports = { loadAlbumCodeData, slugify }
