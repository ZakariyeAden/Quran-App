const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// POST for Plan
router.post("/", (req, res) => {
  let queryText = `INSERT INTO "chapter_plan" ("chapter_id","plan_id","deadline")
                   VALUES ($1,$2,$3) `;

  let chapterPlan = req.body;
  // Parameterization for Plan
  let planParams = [
    chapterPlan.chapter,
    chapterPlan.plan_id,
    chapterPlan.deadline,
  ];

  pool
    .query(queryText, planParams)
    .then(result => {
      console.log("INSERTED chapter plan from user into DB", chapterPlan);
      // Send an OK status in POSTMAN
      res.sendStatus(201);
      // Catch any Errors
    })
    .catch(err => {
      console.log(`ERROR in POST for Chapter Plan: ${queryText}`, err);
      //  Send an ERROR status
      res.sendStatus(501);
    });
});

// GET for plan
router.get("/", (req,res) => {
  let queryText = `SELECT * FROM "chapter_plan"
                   JOIN "chapter"
                   ON "chapter"."id"  = "chapter_plan"."chapter_id";`;

  pool.query(queryText)
  .then((result) => {
    console.log('Recieved chapter plan from user into DB',result.rows);
    // Send the data!
    res.send(result.rows);
    // Catch any ERRORS
  }).catch((err) => {
    console.log(`ERROR in GET for chapter plan: ${queryText}`,err);
    // Send an ERROR status
    res.sendStatus(501);
  })
})

module.exports = router;
