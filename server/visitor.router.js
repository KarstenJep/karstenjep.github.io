const express = require('express');
const router = express.Router();
const pool = require('./pool')

// grabs all movies by title and sends to saga
// router.get('/', (req, res) => {
//   const query = `SELECT * FROM mail ORDER BY "date" ASC`;
//   pool.query(query)
//     .then( result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all mail', err);
//       res.sendStatus(500)
//     })
// });

// post to add new movies to DB
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