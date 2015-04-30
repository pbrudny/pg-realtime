var pgListener = require('./lib/pg_listener');

var user = process.argv[2];
var password = process.argv[3];
var database = process.argv[4];

var connectionString = "postgres://" + user + ':' + password + '@localhost/' + database;

pgListener.run(connectionString);
