const http = require('http');

getFinhockeyData = function() {
  return new Promise( (resolve, reject) => {
    http.get('http://tilastopalvelu.fi/ih/modules/mod_standings/helper/standings.php?statgroupid=3545', (res) => {
      var body = "";

      res.on('data', function(chunk) {
        body += chunk;
      });

      res.on('end', function() {
        resolve( JSON.parse(body) );
      });

    }).on('error', reject);
  });
}

module.exports.getFinhockeyData = getFinhockeyData;