var twss = require('twss');
var repositoryFactory = null;

module.exports.setRepositoryFactory = function(factory) {
  repositoryFactory = factory;
};

module.exports.home = function(req, res) {
  res.render('home', {
    title: "Vish's nodejs web experiments"
  });
};

module.exports.statusList = function(req, res) {
 var repository = repositoryFactory.create('statusCode');
 var statusList = repository.getAll();
  res.render('statusList', {
    title: 'HTTP Status Code List',
    locals: {
      list: statusList
    }
  });
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


module.exports.statusReturn = function(req, res) {
  statusCode = req.params.statusCode;
  var repository = repositoryFactory.create('statusCode');
  var statusData = repository.getById(statusCode);
  if(!statusData)
    res.send('Invalid Status Code', {}, 404);
  else if(statusCode.charAt(0) === "1")
    res.send('1XX status codes are not supported', {}, 404);
  res.send(parseInt(statusCode));
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
