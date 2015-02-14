#YTAS - YouTube Audio Streamer

This is a node.js script that uses [youtube-dl](http://www.github.com/fent/node-youtube-dl), [request](https://github.com/request/request), [through2](https://github.com/rvagg/through2) and [liquid-ffmpeg](https://www.npmjs.com/package/liquid-ffmpeg) modules to stream audio straight from a video. 

On a side note, YTAS will also work with the [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) module, but liquid-ffmpeg takes up less space and seemingly less memory. To switch to fluent, just change the <code>var ffmpeg = require('liquid-ffmpeg');</code> to <code>var ffmpeg = require('fluent-ffmpeg');</code> . Make sure to also <code>npm install fluent-ffmpeg</code> (and, if you want, <code>npm uninstall liquid-ffmpeg</code>)!

Speaking of things this could work with, one could also use the [ytdl-core](https://github.com/fent/node-ytdl-core) node module, but it fails when downloading copyrighted things like music. You could use similar steps as the instructions above.

First, change

```javascript
var ytdl = require('youtube-dl');
```
in server.js to
```javascript
var ytdl = require('ytdl-core');
```
then run:
```
npm install ytdl-core
npm uninstall youtube-dl
```

To start the server, simply run one of two commands:

<code>npm start</code> or <code>node server.js</code>

They're both exactly the same, so I guess you can just choose arbitrarily.

Then, all you have to do is navigate to this URL in any browser that is <em>not</em> Safari. (TODO: Add Safari seeking support)

<code>
http://localhost:3000/?i=<em>youtube video ID here</em>&s=<em>0</em> or <em>1</em> to toggle seeking
</code>

<strong>NOTE: If the "seeking" parameter is not filled in, it will default to true.</strong>

This will return your stream. You can also change the bitrate in the <strong>options.json</strong> file.

If seeking is true, this application will use the bitrate and the duration (from YouTube API v2) to get the full length of the audio file in bytes, which allows the video stream to support seeking in most browsers, but Safari seems to ignore the HTTP status. 

Unfortunately, no demo can be provided at the moment becuase OpenShift is giving me grief. If anybody can get this working on a free PAAS, please let me know at <nsandman09@gmail.com>.


#Installation
Installation is fairly simple. Just download or clone all the files into a folder anywhere. Make sure you have both node and npm installed. If you are unsure, run the command <code>which node</code> and then <code>which npm</code>. If you get something like <code>/usr/local/bin/node</code>, it is installed. If a blank line comes up and then it prompts you to write a new command, node is not installed. Simply go to [http://www.nodejs.org](http://nodejs.org/) and install it from there.

After node and npm are installed, navigate to the directory YTAS was saved to using the <code>cd</code> command. Run:

<code>npm install</code>

If you do not get a bunch of lines that say <mark style="background-color: black;"><span style="color: #cccccc;">npm</span> <span style="color: red;">ERR!</span></mark>, you're good. Run one of the starting commands above and you're set!
 

#Changelog

0.0.1
-----
Added option to enable or disable seeking
