// Server Initialization
const express = require('express');
const app = express();
app.listen(8000, () => {
  console.log(`Now listening on http://localhost:8000`);
});
// Server Settings
app.set('view engine', 'ejs');
// Routers
const indexRouter = require('./routes/index.js');
app.use(indexRouter);
// Middleware
app.use(express.static('public'));
