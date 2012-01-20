paramPreconditions = require('./helpers/paramPreconditions');
controller = require('./controller');
controller.setRepositoryFactory(require('./repository'));

module.exports.setup = function(app) {
  app.param('statusCode', paramPreconditions.statusCode);

  app.get('/', controller.home);
  app.get('/status/:statusCode', controller.statusCode);
  app.get('/twss', controller.twss);
  app.post('/twss', controller.processTwss);
};
