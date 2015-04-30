var pg = require ('pg');

var run = function (connectionString) {
  pg.connect(connectionString, function(err, client) {
    console.log("Waiting for Postgres updates");
    client.on('notification', function(messagge) {
      console.log(message.payload);
    });

    if(err) {
      console.log(err);
    }
    client.query("LISTEN pg_channel");
  });
};

exports.run = run;
