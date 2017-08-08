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

router.get('/testimonials', (req, res) => {
  res.render('testimonials', {title: 'JLV Design Ltd'});
});

router.get('/projects', (req, res) => {
  res.render('projects', {title: 'JLV Design Ltd'});
});

router.get('/projects/muswellHill1', (req, res) => {
  res.render('muswellHill1', {title: 'JLV Design Ltd', data: homeData});
});

router.get('/projects/muswellHill2', (req, res) => {
  res.render('muswellHill2', {title: 'JLV Design Ltd', data: homeData});
});

router.get('/projects/muswellHill3', (req, res) => {
  res.render('muswellHill3', {title: 'JLV Design Ltd', data: homeData});
});

router.get('/projects/muswellHill4', (req, res) => {
  res.render('muswellHill4', {title: 'JLV Design Ltd', data: homeData});
});

router.get('/projects/shoreditchPark', (req, res) => {
  res.render('shoreditchPark', {title: 'JLV Design Ltd', data: homeData});
});

router.get('/projects/finchley', (req, res) => {
  res.render('finchley', {title: 'JLV Design Ltd', data: homeData});
});

router.get('/projects/muswellHillFamily', (req, res) => {
  res.render('muswellHillFamily', {title: 'JLV Design Ltd', data: homeData});
});

router.get('/projects/familyHomeMuswellHill', (req, res) => {
  res.render('firs', {title: 'JLV Design Ltd', data: homeData});
});

router.get('/projects/gardenOffice', (req, res) => {
  res.render('gardenOffice', {
    title: 'JLV Design Ltd',
    data: homeData
  });
});

router.get('/stars', (req, res) => {
  res.render('stars', {
    title: 'JLV Design Ltd',
    data: framesData
  });
});

export default router;
