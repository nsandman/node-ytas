var y = require('youtube-dl')
var ffmpeg = require('liquid-ffmpeg')
var fs = require('fs')
var http = require('http')
var url = require('url')
var through = require('through2')
var request = require('request')
var options = require('./options.json')

var stream;
var data;
var video;
http.createServer(audio).listen(3000, 'localhost');
console.log('Server listening on port 3000');

function audio(a, b) {
  data = url.parse(a.url,true).query;
  video = y(data.i);

if (data.s != 0) {
  request({url: "http://gdata.youtube.com/feeds/api/videos/" + data.i + "?v=2&alt=jsonc", json: true}, function (error, response, p) {
    p = parseInt(options.bitrate + "000")/8 * p["data"]["duration"];
    b.writeHead(200, {
        'Transfer-Encoding': 'binary'
        , "Connection": "keep-alive"
        , "Content-Type": "audio/mpeg"
        , 'Content-Length': p
        , "Accept-Ranges": "bytes"
    });
  });
}

  stream = b.file ? fs.createWriteStream(b.file):through();

  new ffmpeg({source: video, timeout: 6000}).toFormat('mp3').withAudioBitrate(options.bitrate).writeToStream(stream);

    stream.pipe(b);
};