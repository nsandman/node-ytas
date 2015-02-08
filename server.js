var ytdl = require('youtube-dl');
var ffmpeg = require('liquid-ffmpeg');
var fs = require('fs');
var http = require('http');
var url = require('url');
var through = require('through2');
var request = require('request');
var options = require('./options.json');

var stream;
var data;
var video;
http.createServer(audio).listen(3000);
console.log('Server listening on port 3000');

function audio(a, b) {
  data = url.parse(a.url,true).query;
  video = ytdl(data.id);

if (data.seeking == 1) {
  request({url: "http://gdata.youtube.com/feeds/api/videos/" + data.id + "?v=2&alt=jsonc", json: true}, function (error, response, body) {
    body = parseInt(options.bitrate + "000")/8 * body["data"]["duration"];
    b.writeHead(200, {
        'Transfer-Encoding': 'binary'
        , "Connection": "keep-alive"
        , "Content-Type": "audio/mpeg"
        , 'Content-Length': body
        , "Accept-Ranges": "bytes"
    });
  });
}

  stream = b.file ?
    fs.createWriteStream(b.file)
    :
    through();

  new ffmpeg({source: video})
    .toFormat('mp3')
    .withAudioBitrate(options.bitrate + 'k')
    .writeToStream(stream)
  ;

    stream.pipe(b);
};