---
comments: true
date: '2009-05-26'
slug: gnu-screen-super-basic-tutorial
title: GNU Screen Basic Tutorial
wordpress_id: 423
post_tag:
- deployment
- GNU
- screen
- shell
tags:
- deployment
---

If you've ever SSHed into a server, ran something, logged off and got frustrated because whatever you were running stopped running because you had to change coffee shops or go to class then you've experienced the need for [GNU Screen](http://www.kuro5hin.org/story/2004/3/9/16838/14935).

Put simply it allows you to maintain a persistent session, a terminal that does not change or quit just because you logged out.  Installation is easy.  On a debian machine its simply

    
    sudo apt-get install screen


Usage is straight forward as well.  Type the word "screen"

    
    $ screen


and you'll be shown a welcome window, press space to get through.  Now you'll simply see a standard shell.  You can execute whatever you want here and the session will not die until you tell it to.  You can start many different sessions and toggle between them.  Here's a table of the basic controls for screen.



	
  * _Ctl-a Ctl-c_,  create a new window

	
  * _Ctl-a Ctl-a_,  switch between windows

	
  * _Ctl-a n_, toggle to next window

	
  * _Ctl-a p_, toggle to previous window

	
  * _Ctl-a 5_, toggle to 5th window

	
  * _Ctl-a "_, get a menu listing all of the window

	
  * _Ctl-a A_, tool for adding a name to your window, helpful for the menu view

	
  * _Ctl-a k_, Kills the window

	
  * _Ctl-a d_, Detach from the session


Another thing to note.  Once you detach from a screen, you need to re-attache the next time you run screen.  To do that simply specify the -r parameter.

    
    $ screen -r



_**Update 6-3-2009:**_ A few fixes were made thanks to Ben Finney's comments
