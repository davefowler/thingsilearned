---
date: '2007-05-07 05:05:18'
layout: post
slug: emacs-for-macs
status: publish
title: Emacs for Macs
wordpress_id: '14'
categories:
- os x
- thingsilearned
---

About 4 years ago at Gustavus I watched one of my professors in the only computer science class I took there completely rearange and edit a large text file in a matter of seconds using only the keyboard.  I was amazed and realized I was still in the dark ages of both programing and especially text editing skills.  I decided that I would have to learn whatever editor he was using.  The editor of course was Emacs.  As I'd recently posted, I'd lost my favorite version of it for Macs but I have now found it again.  I like it because its just a simple version of emacs with the GUI ported to a mac.  The publisher also shares two scripts that allow you to use apple-style shortcuts which I enjoy better for cutting and pasting.  Its just called "Emacs for OS X" by Ovidiu Predescu.  You can download the app and scripts here.  Here's a typical screen shot.

[![Emacs for Os X](http://thingsilearned.files.wordpress.com/2007/05/emacs.png)](http://thingsilearned.files.wordpress.com/2007/05/emacs.png)

Alternatives I found were [Aquamacs](http://aquamacs.org/) and [this version](http://emacs-app.sourceforge.net/) who's binary didn't work on my G4 and didn't come with the ./compile script it said it did, and ofcourse the default terminal version.  Aquamacs seems to be the choice for everyone, its alteast the most supported.  It advertises that it expands the usability of Emacs with a new Aqua interface.  When I tried it first two years ago I didn't like it at all.  My two largest problems were one, a personal distaste for the new icon (dumb I know) and the really annoying default setting of showing each buffer in a new window!  I think last time when installing I was trying out 3 different versions and just left this one behind after not finding the option to change that within the first 2 minutes.  This time before blogging about it and probably getting some people angry I thought I'd look again.  It turns out to be a really simple setting to change: _Options > Display Buffers in Seperate Frames_.  Then it turns out to be a pretty sweet version.  Its easier to configure and even looks a little prettier than the other.

[![Aquamacs](http://thingsilearned.files.wordpress.com/2007/05/aquamacs.png)](http://thingsilearned.files.wordpress.com/2007/05/aquamacs.png)

Whichever one looks best to you I hope you give it a try.  Emacs can greatly improve your productivity in simple writing or coding.  Here are a [couple](http://www.chris.spear.net/emacs/default.htm) [sites](http://steve.yegge.googlepages.com/effective-emacs) [on](http://www-128.ibm.com/developerworks/edu/au-dw-au-emacs1-i.html) [learning](http://www.math.utah.edu/computing/unix/emacs.html) [Emacs](http://ccrma.stanford.edu/guides/package/emacs/emacs.html).

An additional tip, to make it run from your terminal add an alias to your ~/.profile file.  For the first version use

`alias emacs="/Applications/Emacs.app/Contents/MacOS/Emacs"`

and for Aquamacs use

`alias emacs="/Applications/Aquamacs Emacs.app/Contents/MacOS/Aquamacs Emacs"`

and finally to reload your .profile without logging out use

`$ source ~/.profile`

in your terminal.  Now I've got my emacs and my computer feels like home again.


Dave
