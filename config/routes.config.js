const express = require("express");
const beers = require("../controllers/beers.controller");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
  });
router.get("/beers", beers.list);
router.get("/random-beers", beers.randomBeer);


module.exports = router;