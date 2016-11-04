const http = require('http');

getFinhockeyStandingsData = function() {
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

getFinhockeyGamesData = function() {
  return new Promise( (resolve, reject) => {
    http.get('http://www.tilastopalvelu.fi/ih/modules/mod_schedule/helper/games.php?statgroupid=3545', (res) => {
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

getFinhockeyPlayerStatisticsData = function() {
  return new Promise( (resolve, reject) => {
    http.get('http://www.tilastopalvelu.fi/ih/modules/mod_statisticsplayers/helper/statistics.php?statgroupid=3545', (res) => {
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


module.exports.getFinhockeyStandingsData = getFinhockeyStandingsData;
module.exports.getFinhockeyGamesData = getFinhockeyGamesData;
module.exports.getFinhockeyPlayerStatisticsData = getFinhockeyPlayerStatisticsData;
