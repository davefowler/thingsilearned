---
comments: true
date: '2007-05-04'
slug: combating-internet-addiction
title: Combating Internet Addiction
wordpress_id: 12
tags:
- os x
- thingsilearned
---

I've been insanely busy the past few weeks finishing up final projects, homeworks, and examinations.  I have some cool things to post when I get a chance but for now I'm leaving a simple productivity tip.  My work revolves completely around computers which in my opinion have become more of a distraction than an assistant in the majority of work places.  The major culprit ... the internet.  Few people are actually distracted by the three exciting windows card games, or the exciting publications they could make with their text editor.  The real distraction lies in the limitless videos, articles, music and other forms of entertainment on the web.  To me, having access to the internet on the very machine that I'm trying to do my work is like trying to read a book infront of the TV.  So often I'm in the middle of coding or writing something and find myself subcontiously pulling up my web browser and typing in the name of my favorite sites.  Before I even realize it I'm on [digg](http://www.digg.com), [grupl](http://www.grupl.com), [facebook](http://www.facebook.com), or [college humor](http://www.collegehumor.com) and have 10 interesting articles to distract me.  I also get heavily distracted from the hard hitting action and news coming from [Jared's One Blog](http://www.jared-lee.com).  Sometimes to prevent this I just turn off my wireless access, but most of the time I still need access to the network for files, coding references, or email, so I've found a better solution.  With some easy edits to my hosts file I simply block the pages that are so problamatic for me.  Here's how:

On a mac pull up your terminal: _Applications > Utilities > Terminal_, and type the following.

    
    $ sudo emacs /private/etc/hosts


It will prompt you for your password and bring up something that looks like the following screen.

[![Hosts File](http://thingsilearned.files.wordpress.com/2007/05/hostsfile.png)](http://thingsilearned.files.wordpress.com/2007/05/hostsfile.png)

Then just add

    
     127.0.0.1 www.distractingsite.com


at the end of the file for each of the sites you want to block, as shown in the example.  What its doing is redirecting requests to those sites to your home computer.  Unless you're serving a page from your computer you should get redirected to nothing.  Make sure to include different names for the site like www.facebook.com, www.thefacebook.com, and minnesota.facebook.com for example.  To save the file press _Ctrl-X Ctrl-S_ and then to close emacs use _Ctrl-X Ctrl-C_.  Now its all setup, though it may take a restart before it starts blocking.

The same can be done on windows.  [This site](http://www.mvps.org/winhelp2002/hosts.htm) tells me that the host files on windows are located at


> Windows Vista	=	C:\WINDOWS\SYSTEM32\DRIVERS\ETC
Windows XP	=	C:\WINDOWS\SYSTEM32\DRIVERS\ETC
Windows 2K	=	C:\WINNT\SYSTEM32\DRIVERS\ETC
Win 98/ME	=	C:\WINDOWS


Now you're no longer victim to those horribly distracting pages and can get your work done!  Exciting?  I think so.


Dave
