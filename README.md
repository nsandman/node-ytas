#YTAS - YouTube Audio Streamer

This is a node.js script that uses the [youtube-dl](http://www.github.com/fent/node-youtube-dl) and [liquid-ffmpeg](https://www.npmjs.com/package/liquid-ffmpeg) modules to stream audio straight from a video. 

On a side note, YTAS will also work with the [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) module, but liquid-ffmpeg takes up less space and seemingly less memory. They also use a different command to set the bitrate.

To start the server, simply run one of two commands:

<code>npm start</code> or <code>node server.js</code>

They're both exactly the same, so I guess you can just choose arbitrarily.

Then, all you have to do is navigate to this URL in Google Chrome. (TODO: Add Safari and Firefox seeking support)

<code>
http://localhost:3000/?id=<em>youtube video ID here</em>&seeking=<em>0</em> or <em>1</em>
</code>

This will return your stream. You can also change the bitrate in the <strong>options.json</strong> file.

If seeking is true, this application will use the bitrate and the duration (from YouTube API v2) to get the full length of the audio file in bytes, which allows the video stream to support seeking in Chrome. Safari seems to ignore the HTTP status. 

Unfortunately, no demo can be provided at the moment becuase OpenShift is giving me grief. If anybody can get this working on a free PAAS, please let me know at <nsandman09@gmail.com>.
<br /><br />

#Changelog

0.0.1
-----
Added option to enable or disable seeking
