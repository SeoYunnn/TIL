import express from 'express';

const router = express.Router();

router.get('/',(req, res) => {
  res.send('Hello, Greet!');
});

router.get('/',(req, res) => {
  const name = req.query.get('name');
  res.send(`Hello, ${name}!`);
});

export default router;