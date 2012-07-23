---
date: '2009-02-08 18:55:40'
layout: post
slug: setup-safari-web-inspector
status: publish
title: Setup Safari Web Inspector
wordpress_id: '250'
---

A few months ago my friends at [280 North](http://280North.com) told me about [Safari's Web Inspector](http://trac.webkit.org/wiki/Web%20Inspector).  Its quite simply Safari's version of Firebug.  Until recently I never had much of a reason to test it out but tonight I did.  To enable it simply run the following command in your Terminal.

    
    <span style="text-decoration:line-through;">defaults write com.apple.Safari WebKitDeveloperExtras \
     -bool true</span>


**Update:** A better way to enable it is in the advanced tab in your preferences.  Thanks Rik

More instructions for the rare windows users are [here](http://trac.webkit.org/wiki/Web%20Inspector).

After that brief setup you can right click on page elements and choose "Inspect Element". It'll open up the Inspector window which has many of the same features as firebug including the option to dynamically edit css files and the following view showing load speeds for your pages.

![webinspecter1](http://thingsilearned.files.wordpress.com/2009/02/webinspecter1.png)

I'm looking forward to playing with this more.
