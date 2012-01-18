var repository = function() {
};

var statusCodeData = {
    200: 'OK',
    404: 'Not Found',
    400: 'Bad Input',
    500: 'Internal Server Error'
};

repository.prototype.getAll = function() {
  return statusCodeData;
};

repository.prototype.getById = function(id) {
  return statusCodeData[id];
};

module.exports = repository;
