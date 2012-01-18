var create = function(repositoryName) {
  if(repositoryName === 'statusCode') {
    var repo = require('./statusCodeRepository');
    return new repo();
  }

  return null;
};

module.exports.create = create;
