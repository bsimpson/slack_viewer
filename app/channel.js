const fs = require('fs');
var emoji = require('node-emoji');
var User = require('./user');

var Channel = function() {};
Channel.prototype.all = function() {
  let channels = fs.readdirSync('./data/');
  return channels.filter(function(channel) {
    return channel.search(/json$/) < 0;
  });
};

Channel.prototype.getCommentsFor = function(channelName) {
  let files = fs.readdirSync("./data/" + channelName);
  let comments = [];
  files.forEach(function(file) {
    const content = fs.readFileSync("./data/" + channelName + "/" + file);
    const JSONContent = JSON.parse(content);
    comments = comments.concat(JSONContent);
  });

  return comments.reduce(function(sum, comment) {
    // Format date
    comment['ts'] = new Date(comment['ts'] * 1000).toUTCString();

    // Format user
    try {
      comment['real_name'] = User.getRealName(comment['user']);
    } catch(err) {
      console.error(err);
      comment['real_name'] = 'unknown';
    }
    try {
      comment['avatar'] = User.getAvatar(comment['user']);
    } catch(err) {
      console.error(err);
      comment['avatar'] = 'http://placehold.it/48x48'
    }

    // Replace mentions with username supplied (<@1234|bsimpson>)
    comment['text'] = comment['text'].replace(/(.*\|(.*)>)/, "$2");

    // Replace other mentions without username (<@1234>)
    const mentions = comment['text'].match(/<@(\w+)>/g);
    // <@1234>
    (mentions || []).forEach(function(mention) {
      // 1234
      const slackHandle = mention.match(/<@(.*)>/)[1];
      const username = "@" + User.getRealName(slackHandle);
      comment['text'] = comment['text'].replace(mention, username);
    });

    // Emojis
    comment['text'] = emoji.emojify(comment['text']);

    // Emoji reactions
    if (comment['reactions']) {
      comment['reactions'] = comment['reactions'].reduce(function(sum, reaction) {
        const emojifiedName = emoji.emojify(':' + reaction['name'] + ':');
        reaction['name'] = emojifiedName;
        return sum.concat(reaction);
      }, []);
    }

    return sum.concat(comment);
  }, []);
};

module.exports = new Channel();
