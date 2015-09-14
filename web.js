var compression = require('compression'),
  express = require('express'),
  morgan = require('morgan'),
  path = require('path');

var app = express();
app.use(morgan('dev'));
app.use(compression());

var oneMonth = 2629746000;
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: oneMonth }));

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
