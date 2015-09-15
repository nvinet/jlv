var compression = require('compression'),
  express = require('express'),
  morgan = require('morgan'),
  path = require('path'),
  staticify = require("staticify")(path.join(__dirname, "dist"));

var app = express();
app.use(morgan('dev'));
app.use(compression());
app.use(staticify.middleware);

app.locals.getVersionedPath = staticify.getVersionedPath;

var oneMonth = 2629746000;
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: oneMonth }));

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
