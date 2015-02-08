#YTAS - YouTube Audio Streamer

This is a node.js script that uses the [youtube-dl](http://www.github.com/fent/node-youtube-dl) module to stream audio straight from a video. All you have to do is navigate to:

<code>
http://localhost:3000/?id=<i>youtube video ID here</i>
</code>

This will return your stream. You can also change the bitrate in the <b>options.json</b> file.

This module uses the bitrate and the duration (from YouTube API v2) to get the full length of the audio file in bytes, which allows the video stream to support seeking (in Chrome). Safari seems to ignore the HTTP status. (TODO: Add Safari seeking support)

Unfortunately, no demo can be provided at the moment becuase OpenShift is giving me grief. If anybody can get this working on a free PAAS, please let me know at nsandman09@gmail.com.