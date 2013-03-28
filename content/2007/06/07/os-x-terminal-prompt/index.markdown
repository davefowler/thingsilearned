---
comments: true
date: '2007-06-07'
slug: os-x-terminal-prompt
title: OS X Terminal - Prompt Format
wordpress_id: 34
tags:
- os x
- thingsilearned
---

As I've alluded to [previously](http://thingsilearned.wordpress.com/2007/04/26/screw-you-a-python-example/) I like to customize my terminal as I spend plenty of time in it.  I typically go with an old school green on black, though sometimes I go with a simple black on white depending on my mood.  A lot of terminal settings unfortunately aren't customizable from the preferences.  One such setting is the format of the command prompt.  I was getting really anoyed with the wrapping length of mine today.

[![Long Terminal](http://thingsilearned.files.wordpress.com/2007/06/longterminal.png)](http://thingsilearned.files.wordpress.com/2007/06/longterminal.png)

Just not acceptable.  Luckily [OS X Daily](http://osxdaily.com/2006/12/11/how-to-customize-your-terminal-prompt/) came through with the solution.   They use some non-default steps however so here are my recomendations.  I'm assuming you're using a bash prompt which starts up running .profile (if you're not sure, you probably are).  Open your .profile file with the following

`$ emacs ~/.profile`

Add the following command somewhere in the opened file.

`export PS1="\u@\h-\W$ "`

Now press _Ctl-X Ctl-S_ to save it and then _Ctl-X Ctl-C_ to close back to your terminal.  To load the settings re-source your .profile with

`$ source ~/.profile`

The setting will change your command prompt to [user name]@[host name]-[current dir].  It should look something like this...

[![Short Terminal](http://thingsilearned.files.wordpress.com/2007/06/shortterminal.png)](http://thingsilearned.files.wordpress.com/2007/06/shortterminal.png)

So much better now.  If you don't like mine you can make your own format by changing whatever's between the quotes.  The following variables can be used:
`
\d - Current date
\t - Current time
\h - Host name
\# - Command number
\u - User name
\W - Current working directory
\w - full path
`

As you can see the default must have been "\h:\w \u".  Thank god we're rid of that!  It was so long...

As a bonus tip, if you don't like your host name for some reason like your computer still isn't smart enough to notice obvious typos like Dave-Fowers-Computer you can change it in _System Preferences > Sharing > Computer Name._ Might I recommend the name Jared. For some reason it always makes me feel more safe.

Hope you enjoyed one of the thingsilearned today.


Dave
