
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();



// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.disabled('view cache');


// development only
if ('development' == app.get('env')) {
  app.set('views', __dirname + '/app/views');
  app.use(express.static(path.join(__dirname, 'app')));
  // Handle 404
  app.use(function(req, res) {
     res.send('404: Page not Found', 404);
  });
  
  // Handle 500
  app.use(function(error, req, res, next) {
     res.send('500: Internal Server Error:<br>' + error, 500);
  });
}else{
  app.set('views', __dirname + '/dist');
  app.use(express.static(path.join(__dirname, 'dist')));
}


//load route
require('./routes/index')(app);


module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port') 
  	+ " and run on " + app.get('env') + " environments");
});
