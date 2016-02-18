'use strict';

var pg = require('pg');
var Logs = require('./logs.js');
var url = require('./config.js').DATABASE_URL;
var frontendLog = require('./logwaker.js');

function heartBeat(db) {
  return function (req, res) {
    db('SELECT ok FROM heartbeat;', function(err, result) {
      if (err)
        {
           var logger = new Logs();
           logger.logError('heartBeatQueryConnect error', err, 'ERROR');
           res.status(500).json({error: err});
        }
        else
          {
            res.status(200).json(result.rows);
            frontendLog.newLogWaker('PAGE VIEW AT /heartbeat');
          }
    });
  };
}

module.exports = {
  heartBeat: heartBeat
};
