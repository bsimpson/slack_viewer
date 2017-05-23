var express = require('express');
var router = express.Router();
var Channel = require('../app/channel');

/* GET home page. */
router.get('/', function(req, res, next) {
  const channels = Channel.all();
  res.render('index', { title: 'Slack Viewer', channels: channels });
});

router.get('/channels/:channelName', function(req, res, next) {
  const title = req.params.channelName;
  const channels = Channel.all();
  const comments = Channel.getCommentsFor(title);
  res.render('channel', { title: title, comments: comments, channels: channels });
});

module.exports = router;
