const express = require('express');
const router = express.Router();
const pool = require('./pool')

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

router.post('/', (req, res) => {
  // console.log('In name post', req.body);
  const nameQuery = `
  INSERT INTO "visitors" ("name")
  VALUES ($1);`

  // FIRST QUERY MAKES MOVIE
  pool.query(nameQuery, [req.body.name])
  .then(result => {
  // Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;