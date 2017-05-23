var fs = require('fs');
var User = function() {

  users = function() {
    return JSON.parse(fs.readFileSync('./data/users.json'));
  }(),

  getRealName = function(slackHandle) {
    return users.find(function(user) {
      return user.id == slackHandle;
    })['name'];
  },

  getAvatar = function(slackHandle) {
    return users.find(function(user) {
      return user.id == slackHandle;
    })['profile']['image_48'];
  }

  return {
    getRealName: getRealName,
    getAvatar: getAvatar
  }
}

module.exports = new User();
