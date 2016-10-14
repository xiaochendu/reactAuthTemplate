const mongoose = require('mongoose');

module.exports = function(config) {

  mongoose.connect(config.db, function(err) {
    if (err) { throw err; }
  });

  require('./user');
};
