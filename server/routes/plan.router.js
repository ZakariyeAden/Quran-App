const express = require("express");
const { rejectUnauthenticated } = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

// POST for Plan
router.post("/",rejectUnauthenticated, (req, res) => {
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
      res.sendStatus(200);
      // Catch any Errors
    })
    .catch(err => {
      console.log(`ERROR in POST for Chapter Plan: ${queryText}`, err);
      //  Send an ERROR status
      res.sendStatus(501);
    });
});

// GET for plan
router.get("/",rejectUnauthenticated, (req, res) => {
  let queryText = `SELECT  "chapter_plan"."id", "chapter_id", "name", "deadline", "current_date", "completed" FROM "chapter_plan"
  JOIN "chapter"
  ON "chapter"."id"  = "chapter_plan"."chapter_id" ORDER BY "deadline";`;

  pool
    .query(queryText)
    .then(result => {
      console.log("Recieved chapter plan from user into DB", result.rows);
      // Send the data!
      res.send(result.rows);
      // Catch any ERRORS
    })
    .catch(err => {
      console.log(`ERROR in GET for chapter plan: ${queryText}`, err);
      // Send an ERROR status
      res.sendStatus(501);
    });
});

// Delete by Id for Plan
router.delete("/delete/:id",rejectUnauthenticated, (req, res) => {
  let idToDelete = req.params.id;
  let queryText = `DELETE FROM "chapter_plan" WHERE id = $1;`;

  pool
    .query(queryText, [idToDelete])
    .then(result => {
      // Send an OK status
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(501);
      console.log(`ERROR in Deleting Plan by Id: ${queryText}`, err);
    });
});

// Update to Completed as True by id
router.put("/complete/:id",rejectUnauthenticated, (req, res) => {
  let idToUpdate = req.params.id;
  let queryText = `UPDATE "chapter_plan" SET "completed" = TRUE WHERE id = $1;`;

  pool
    .query(queryText, [idToUpdate])
    .then(result => {
       // Send an OK status
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(`ERROR in UPDATING complete: ${queryText}`, err);
    });
});

router.put("/edit/:id",rejectUnauthenticated, (req, res) => {
  let idToUpdate = req.params.id;
  let chapterPlan = req.body;
  // Parameterization for Editing Plan!
  let editPlanParam = [chapterPlan.chapter, chapterPlan.deadline, idToUpdate];
  let queryText = `UPDATE "chapter_plan" SET "chapter_id" = $1, "deadline" = $2, "completed" = FALSE WHERE id = $3;`;

  pool
    .query(queryText, editPlanParam)
    .then(response => {
      // Send an OK status
      res.sendStatus(200);
      console.log("UPDATE plan by id in the database!");
    })
    .catch(err => {
      console.log(`ERROR in updating PLAN edit: ${queryText}`,err);
    });
});

module.exports = router;
