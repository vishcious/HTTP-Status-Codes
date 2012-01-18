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
  res.render('statusCode', {title: 'HTTP Status Code - ' + statusCode, locals: {statusCode: statusCode, statusDescription: statusData}});
};
