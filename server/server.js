// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// // Route includes
// const mailRouter = require('./mail.router');
// const visitorRouter = require('./visitor.router');

// // Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// /* Routes */
// app.use('/api/mail', mailRouter);
// app.use('/api/visitor', visitorRouter);

// // Serve static files
// app.use(express.static('build'));

// // App Set //
// const PORT = process.env.PORT || 5000;

// /** Listen * */
// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}[]`);
// });
