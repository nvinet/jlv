import express from 'express';
import homeData from '../data/home.json';
import framesData from '../data/frames.json';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'JLV Design Ltd',
    data: homeData
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {title: 'JLV Design Ltd'});
});

router.get('/about', (req, res) => {
  res.render('about', {title: 'JLV Design Ltd'});
});

router.get('/stars', (req, res) => {
  res.render('stars', {
    title: 'JLV Design Ltd',
    data: framesData
  });
});

export default router;
