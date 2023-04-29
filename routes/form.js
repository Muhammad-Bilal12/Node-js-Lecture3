const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "forms.html"));
});

router.post("/submit", (req, res) => {
  //   res.send(req.body);
  res.send(req.body);
});

module.exports = router;
