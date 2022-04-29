const express = require("express");
const listPlacements = require("./list-placements");
const router = express.Router();

router.get("/", function (req, res, next) {
  const { query } = req;

  res.json({ results: listPlacements(query) });
});

module.exports = router;
