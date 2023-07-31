const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
// GET chapters
router.get('/', rejectUnauthenticated, (req, res) => {
  let queryText = `SELECT * FROM "chapter";`;

  pool.query(queryText)
  .then((result) => {
    // Send the chapters to Client
    res.send(result.rows);
    console.log('Recieve all of the chapters from DB:',result.rows);
    // Catch any Errors
  }).catch((err) => {
    console.log(`ERROR in GET chapters: ${queryText}`,err);
    // Send an ERROR status
    res.sendStatus(501);
  })
});



module.exports = router;
