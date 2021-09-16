const express = require('express');
const router = express.Router();
const characterSchema = require('../Schemas/CharacterSchema');

router.use(express.json());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-requested-With, Content-Type, Accept'
  );
  next();
});

router.get('/', async (req, res) => {
  try {
    const character = await characterSchema.find({
      name: req.query.name
    });
    res.json(character);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
