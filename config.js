module.exports.setup = function(app) {
  
  app.configure(function() {
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
  });

  app.configure('development', function() {
    app.use(express.logger());
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
  });

  app.configure('production', function() {
    var oneYear = 31557600000;
    app.use(express.static(__dirname + '/public', {maxAge: oneYear}));
    app.use(express.errorHandler());
  });

};
