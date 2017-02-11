const http = require('http');

getFinhockeyStandingsData = function() {
  return new Promise( (resolve, reject) => {
    http.get('http://www.tilastopalvelu.fi/ih/beta/tilastointi/modules/mod_advstandings/helper/getstandings.php?type=0&stgid=4719&season=&winpoints=0&advancedfilters=;;;;;&advancedtype=TeamPoints&advancedsortorder=DESC&advancedsortterm=TeamPoints', (res) => {
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
    http.get('http://www.tilastopalvelu.fi/ih/beta/tilastointi/modules/mod_seriegameschedule/helper/getgames.php?stgid=4719&levelid=68&type=1&teamid=&season=', (res) => {
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
    http.get('http://www.tilastopalvelu.fi/ih/beta/tilastointi/modules/mod_playerstats/helper/getplayerstats.php?stgid=4719&season=&filters=;0;0;;;&advancedfilters=;0;0;;;&type=0&length=0&advancedlength=10&sortorder=DESC&sortterm=PlayerPoints&advancedtype=&advancedsortorder=DESC&advancedsortterm=', (res) => {
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
