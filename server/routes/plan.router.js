const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
// GET chapters
router.get('/', rejectUnauthenticated, (req, res) => {
 

  pool.query()
  .then((result) => {
  
    // Catch any Errors
  }).catch((err) => {
   
  })
});



module.exports = router;