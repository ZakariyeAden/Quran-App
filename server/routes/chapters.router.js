const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET chapters
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "chapter";`;

  pool.query(queryText)
  .then((result) => {
    // Send the chapters to Client
    res.send(result.rows);
    console.log('Recieve all of the chapters from DB:');
    // Catch any Errors
  }).catch((err) => {
    console.log(`ERROR in GET chapters: ${queryText}`,err);
    // Send an ERROR status
    res.sendStatus(501);
  })
});

// GET indiviual chapters by id
router.get('/:id', (req, res) => {
  let queryText = `SELECT * FROM "chapter" WHERE id = $1;`;
  let chapterId = req.params.id;
  pool.query(queryText, [chapterId])
  .then((result) => {
    // Send the chapter item to Client
    res.send(result.rows);
    console.log('Recieved the indiviual chapter from DB:');
    // Catch any Errors
  }).catch((err) => {
    console.log(`ERROR in GET chapter item: ${queryText}`,err);
    // Send an ERROR status
    res.sendStatus(501);
  })
});



module.exports = router;
