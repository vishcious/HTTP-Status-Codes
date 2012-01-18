module.exports.statusCode = function(req, res, next, statusCode) {
  if(isNaN(parseInt(statusCode)))
    res.send('Invalid status code', {}, 404);
  else if(statusCode.length !== 3)
    res.send('Invalid status code', {}, 404);
  next(); 
};
