const express = require('express');
const router = express.Router();


//post login
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please provide details");
  }
});

module.exports = router;
