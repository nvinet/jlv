var gzippo = require('gzippo'),
  express = require('express'),
  morgan = require('morgan'),
  path = require('path');

var app = express();
app.use(morgan('dev'));
app.use(gzippo.staticGzip("dist"));

app.use(express.static(path.join(__dirname, 'dist')));

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
