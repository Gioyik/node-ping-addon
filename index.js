var pingit = require('bindings')('node-ping-addon');

module.exports = {

  ping: function(domain) {
    return pingit.ping(domain);
  },

  pingAsync: function(domain, callback) {
    pingit.pingAsync(domain, function(err, miliseconds){
      if(miliseconds === 0) return callback(new Error('Timeout +5s'));
      if(miliseconds === -1) return callback(new Error('Socket error'));
      if(miliseconds === -2) return callback(new Error('Malloc error'));
      if(miliseconds === -3) return callback(new Error('Unknown host'));

      callback(null, miliseconds);
    });
  }
};