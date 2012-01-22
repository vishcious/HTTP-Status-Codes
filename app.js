express = require('express');

var app = express.createServer();

require('./config').setup(app);
require('./routes').setup(app);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
