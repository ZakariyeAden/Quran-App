const express = require("express");
const router = express.Router();
const axios = require('axios')

router.get("/:id", (req, res) => {
let surahId = req.params.id;
// API from alquran for Verses.
  axios.get(`https://api.alquran.cloud/v1/surah/${surahId}`)
    .then(response => {
      // Send the response
      res.send(response.data.data);
    })
    // Catch any ERRORs
    .catch(err => {
      console.log("ERROR in GET fetching the verses from alQuran API route:", err);
    });
});

module.exports = router;