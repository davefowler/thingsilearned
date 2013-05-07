---
date: '2013-03-30'
title: 'exitwp: Wordpress Export Script for Hyde'
comments: true
category: code
---

There's a nice [wordpress export script for Jeckyll][origexport] on github.  I [forked it][source] and made it work for [Hyde][] which is quite a similar format.  I made a few other changes based on these requirements I had

 * Maintain the url structure of /YYYY/MM/DD/post-slug/
 * Clean up a bunch of odd characters
 * Maintain code highlighting

Unfortunately many of the code sections didn't work out, but almost everything else did.  I didn't actually have to change a lot to get it working.  If interested you can checkout the [diff on github.][commit]

Here are a few downsides of the script

 * I couldn't export dates in the !!timestamp "YYYY-MM-DD HH:MM:SS" format that Hyde likes due to the yaml library used.
 * I've still been unable to get the wordpress comments imported into Livefyre or Disqus
 * I wasn't able to get everything working with syntax highlighting


[commit]: https://github.com/davefowler/exitwp/commit/95584798feb2a2ef09e86817584754c9059d6616
[origexport]: https://github.com/thomasf/exitwp
[source]: https://github.com/davefowler/thingsilearned
[Hyde]: https://github.com/hyde/hyde

