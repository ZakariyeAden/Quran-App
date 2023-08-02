const Axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {

// API from alquran for Verses.
// MUST keep the api private by .env and putting it .gitignore
// https://api.alquran.cloud/v1/surah
// https://api.alquran.cloud/v1/surah/
  Axios.get(`https://api.alquran.cloud/v1/surah/${req.params.id}`)
    .then(response => {
      // Send the response
      res.send(response.data);
    })
    // Catch any ERRORs
    .catch(err => {
      console.log("ERROR in GET fetching the verses from alQuran API route:", err);
    });
});

module.exports = router;