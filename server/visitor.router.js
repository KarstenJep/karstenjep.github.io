const express = require('express');
const router = express.Router();
const pool = require('./pool')

// GET list of all visitors from DB
router.get('/', (req, res) => {
  const query = `SELECT * FROM visitors ORDER BY "id" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all visitors', err);
      res.sendStatus(500)
    })
});

// POST new visitor to DB
router.post('/', (req, res) => {
  const nameQuery = `
    INSERT INTO "visitors" ("name")
    VALUES ($1);`
  pool.query(nameQuery, [req.body.name])
    .then(result => {
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
})

module.exports = router;