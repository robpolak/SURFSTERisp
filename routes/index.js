var express = require('express');
var router = express.Router();
var sm = require('sitemap');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'surfsterisp' });
});

router.get('/scrabble/word/finder/cheat/solver/', function(req, res) {
  res.render('backlinks_sn', { title: ''});
});



var sitemap = sm.createSitemap ({
  hostname: 'http://example.com',
  cacheTime: 600000,        // 600 sec - cache purge period
  urls: [
    { url: '/',  changefreq: 'monthly', priority: 0.3 },
    { url: '/scrabble/word/finder/cheat/solver/',  changefreq: 'monthly',  priority: 0.7 },
  ]
});

router.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (xml) {
    res.header('Content-Type', 'application/xml');
    res.send( xml );
  });
});












router.get('*', function(req, res) {
  res.render('index', { title: 'surfsterisp'});
});
module.exports = router;
