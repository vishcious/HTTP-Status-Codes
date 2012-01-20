var twss = require('twss');
var repositoryFactory = null;

module.exports.setRepositoryFactory = function(factory) {
  repositoryFactory = factory;
};

module.exports.home = function(req, res) {
  res.send('Hello World');
};

module.exports.statusCode = function(req, res) {
  statusCode = req.params.statusCode;
  var repository = repositoryFactory.create('statusCode');
  var statusData = repository.getById(statusCode);
  if(!statusData)
    res.send('Invalid Status Code', {}, 404);
  res.render('statusCode', {
    title: 'HTTP Status Code - ' + statusCode,
    locals: {
      statusCode: statusCode,
      statusName: statusData
    }
  });
};

module.exports.twss = function(req, res) {
  res.render('twss', {
    title: "That's what she said"
  }) 
};

module.exports.processTwss = function(req, res) {
  res.render('twss', {locals: {
    title: "That's what she said",
    answer: twss.is(req.param('twss'))
  }});
};
