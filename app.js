express = require('express');

var app = express.createServer();

require('./config').setup(app);
require('./routes').setup(app);

app.listen(3000);
