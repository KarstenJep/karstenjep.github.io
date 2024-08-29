// const express = require('express');
// const router = express.Router();
// const pool = require('./pool')

// // grabs all movies by title and sends to saga
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

// // post to add new movies to DB
// router.post('/', (req, res) => {
//   console.log('In message post', req.body);
//   const messageQuery = `
//   INSERT INTO "mail" ("name", "date", "email", "messages")
//   VALUES ($1, $2, $3, $4);`

//   // FIRST QUERY MAKES MOVIE
//   pool.query(messageQuery, [req.body.name, req.body.date, req.body.email, req.body.message])
//   .then(result => {
//   // Catch for first query
//   }).catch(err => {
//     console.log(err);
//     res.sendStatus(500)
//   })
// })

// module.exports = router;
