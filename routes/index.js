const router = require('express').Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { messages });
});

router.post('/new', (req, res, next) => {
  messages.push({ text: req.body.message, added: new Date(), user: 'Test' });
  res.redirect('/');
});

module.exports = router;
