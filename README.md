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

#Installation
Installation is fairly simple. Just download or clone all the files into a folder anywhere. Make sure you have both node and npm installed. If you are unsure, run the command <code>which node</code> and then <code>which npm</code>. If you get something like <code>/usr/local/bin/node</code>, it is installed. If a blank line comes up and then it prompts you to write a new command, node is not installed. Simply go to [http://www.nodejs.org](http://nodejs.org/) and install it from there.

After node and npm are installed, navigate to the directory YTAS was saved to using the <code>cd</code> command. Run:

<code>npm install</code>

If you do not get a bunch of lines that say <mark style="background-color: black;"><span style="color: #cccccc;">npm</span> <span style="color: red;">ERR!</span></mark>, you're good. Run one of the starting commands above and you're set!
 

#Changelog

0.0.1
-----
Added option to enable or disable seeking
