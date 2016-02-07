import express from 'express';
import homeData from '../data/home.json';
import framesData from '../data/frames.json';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'JLV Design Ltd',
    data: homeData
  });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'JLV Design Ltd' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'JLV Design Ltd' });
});

router.get('/stars', (req, res, next) => {
  res.render('stars', {
    title: 'JLV Design Ltd',
    data: framesData
  });
});

module.exports = router;
