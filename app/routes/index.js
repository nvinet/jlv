var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JLV Design Ltd' });
});

router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'JLV Design Ltd' });
});

router.get('/about', function(req, res, next){
  res.render('about', { title: 'JLV Design Ltd' });
});

router.get('/frames', function(req, res, next){
  res.render('frames', { title: 'JLV Design Ltd' });
});

module.exports = router;
