// Server Initialization
const express = require('express');
const app = express();
app.listen(10000, () => {
  console.log(`Now listening on http://localhost:10000`);
});

// Server Settings
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const indexRouter = require('./routes/index.js');
app.use(indexRouter);
