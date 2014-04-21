var express  = require('express'),
    http     = require('http'),
    path     = require('path'),
    app      = express(),
    ENV      = app.get('env'),

app.use(express.cookieParser());
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.bodyParser({uploadDir: './tmp'}));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(app.router);


app.get('/', function(req, res) {
  res.render('index');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});