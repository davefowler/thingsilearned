---
comments: true
date: '2007-09-30'
slug: electric-fence-on-os-x
title: Electric Fence on OS X
wordpress_id: 79
tags:
- C
- os x
- thingsilearned
---

I recently suspected the dreaded buffer overrun in a project I'm hacking for work.  These can be a huge pain to find, especially if your code has a considerable amount of mallocs and fails irregularly.  After dismissing the urge to just write it all in python (wasn't practical for the application) I decided to learn a malloc debugging tool.

I was excited to learn that macs come with their own malloc debuger, entitled Malloc Debugger.  How handy!  Through several attempts to use it on my application however I kept getting the same error.

_Unable to read malloc information from (null)_

I'm probably just missing some libraries to include that would have been had I been using Xcode.  Instead I was compiling with g++ -g.

Anyway, I eventually checked out [Electric Fence](http://linux.softpedia.com/get/Programming/Debuggers/Electric-Fence-3305.shtml) (efence) and had decent results.  It didn't compile right away, you have to comment out line 33 of page.c as stated in [this mailing list](http://lists.apple.com/archives/xcode-users/2005/Oct/msg00791.html).

Copy the compiled library libefence.a to /usr/lib/ and re-compile your application with the flag -lefence.

Upon execution it will spit out problems you have in your malloc code and die if there was a buffer overrun.  Its a great tool to turn on while you work as you'll be informed of any overwrites as you're developing.  Not after the whole thing is done and quitting at odd times :).


Dave
